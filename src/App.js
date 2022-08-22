import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Landing from "./Views/Landing";
import Signup from "./Views/Signup";
import AdminLogin from "./Views/AdminLogin";
import Admin from "./Views/Admin";
import ClientHome from "./Views/ClientHome";
import ClientBook from "./Views/ClientBook";
import { useContext } from "react";
// import {Context} from 

function App() {
  // const { user } = useContext(Context);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<ClientHome />} />
          <Route path="/dashboard/book" element={<ClientBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
