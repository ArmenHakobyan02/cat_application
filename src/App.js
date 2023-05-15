import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './Components/Nav/Nav';
import { Cat } from './Components/Cat/Cat';
import { ManyCats } from './Components/ManyCats/ManyCats';

function App() {
  return (
    <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Cat />} />
            <Route path="/ManyCats" element={< ManyCats />} />
          </Routes>
    </div>
  )
}

export default App;
