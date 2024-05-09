import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Routes>
            {/* Define the route and its corresponding component */}
        
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;