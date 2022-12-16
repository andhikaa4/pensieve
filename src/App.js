import BG from './Images/bg.jpg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Auth from './components/pages/Auth';
import Summary from './components/pages/Summary';
import Details from './components/pages/Details';

function App() {
  return (
    
    <div style={{
      backgroundImage: `url(${BG})`,
      height: "100vh",
      backgroundSize:"100%"
    }}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Auth/>}/>
            <Route exact path='/summary' element={<Summary/>}/>
            <Route exact path='/details' element={<Details/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
