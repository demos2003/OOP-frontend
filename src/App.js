import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Views/Landing';

function App() {
  return (
    <div className="App">
     <Router>
  <div className="App">
   <Routes>
          <Route path="/" element={<Land/>} />
            
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

export default App;
