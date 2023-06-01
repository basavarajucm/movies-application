import './App.css';
import MoviesDashboard from './components/MoviesDashboard';
import { BrowserRouter } from 'react-router-dom'
import { VideoCameraOutlined } from '@ant-design/icons';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <VideoCameraOutlined
            className='app-icon'
            onClick={() => window.location.reload()} />
          <h1>Movies Application</h1>
        </div>
        {/* Rendering the movie Dashboard */}
        <MoviesDashboard />
    </BrowserRouter>
    </div>
  );
}

export default App;
