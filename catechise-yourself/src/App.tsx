import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WestminsterShorter from './components/WestminsterShorter';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Routes>
            {/* Define the route and its corresponding component */}
            <Route path="/" element={<Home />} />
            <Route path="/westminster-shorter" element={<WestminsterShorter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;