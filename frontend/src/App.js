import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import TwitchUsers from './pages/TwitchUsers';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
        <Routes>
          <Route 
            path='/twitch'
            element={<TwitchUsers />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
