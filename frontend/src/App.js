import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages and Components
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="Pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}>
            </Route>
          </Routes>
        </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
