import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Views/Landing';
import Signup from './Views/Signup';

function App() {
  return (
    <div className="App">
     <Router>
  <div className="App">
   <Routes>
          <Route path="/" element={<Land/>} />
          <Route path="/signup" element={<Sign/>}/>

            
          {/* <Route path="/" element ={<Dash/>} /> */}
          
        </Routes>
    </div>
    </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
  }
  
function Land(){
  return <Landing/>;
}

function Sign(){
  return<Signup/>
}

export default App;
