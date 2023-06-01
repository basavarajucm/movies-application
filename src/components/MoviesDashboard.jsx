import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moviesActions from '../actions/moviesActions';
import * as spinnerActions from '../actions/spinnerActions'
import MoviesSearchBar from './MoviesSearchBar';
import MoviesDisplay from './MoviesDisplay';
import PropTypes from 'prop-types';
import { Modal, Empty } from 'antd';
import { withRouter } from 'react-router-dom';



function MoviesDashboard(props) {
    const [popularMovies, setPopularMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [numOfMovies, setnumOfMovies] = useState(0);
    const [spinner, setSpinner] = useState(false);
    const [searchText, setSearchText] = useState('')


    //Used to display popular movies on initial load of the application
    useEffect(() => {
        setSpinner(true);
        fetchPopularMovies()
        setSpinner(false);
    }, [])


    //Used to display movies on click of pagination
    useEffect(() => {
        if (searchText === '') {
            fetchPopularMovies();
        } else {
            searchMovieByTitle(searchText);
        }
        setSpinner(false);
      }, [pageNumber]);

    //The function is used to pull the popular movies
    const fetchPopularMovies = async () => {
        const data = await props.moviesActions.fetchMovies(pageNumber);
        setPopularMovies(data.movies.results);
        setnumOfMovies(data.movies.total_pages);

    }

    //The function is used to pull the movies based on the title
    const searchMovieByTitle = async (value) => {
        const data = await props.moviesActions.searchMovies(pageNumber, value);
        setPopularMovies(data.movies.results);
        setnumOfMovies(data.movies.total_pages);
        setSpinner(false);
    }

    const onSearch = (value) => {
        setPageNumber(1);
        if (value != '') {
            setSearchText(value);
            setSpinner(true);
            searchMovieByTitle(value);
         
        } else {
            Modal.error({
                title:"Please enter movie title"
            });
        }
    }

    //The function is used to handle pagination
    const handlePagination = (current, pageSize) => {
            setPageNumber(current);
            setSpinner(true);
    }



    return (
        <div className="dashboard-component">
            {/* Movie Search Bar Component allow's to search for a movie by entering the title */}
            <MoviesSearchBar onSearch={onSearch} />
            {
              popularMovies.length >0?
              <MoviesDisplay
                popularMovies={popularMovies}
                spinner={spinner}
                numOfMovies={numOfMovies}
                handlePagination={handlePagination}
                searchText={searchText}
            />:
                <Empty
                  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  imageStyle={{
                    height: 200,
                  }}
                  description={
                    <span>There are no movies that matched your query.</span>
                  }
                />
                
           }
           
        </div>
    );
}

MoviesDashboard.propTypes = {
    moviesActions: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        movies: state.movies,
        spinnerloading: state.spinnerloading

    };
}

function mapDispatchToProps(dispatch) {
    return {
        moviesActions: bindActionCreators(moviesActions, dispatch),
        spinnerActions: bindActionCreators(spinnerActions, dispatch),
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesDashboard));