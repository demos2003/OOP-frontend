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
import { Context, ContextA } from "./Components/context/Context";

function App() {
  const { user } = useContext(Context);
  const { admin } = useContext(ContextA);
  // console.log(user);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={admin ? <Admin/> : <AdminLogin/>} />
          <Route
            path="/dashboard"
            element={user ? <ClientHome /> : <Landing />}
          />
          <Route
            path="/dashboard/book"
            element={user ? <ClientBook user={user}/> : <Landing />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
