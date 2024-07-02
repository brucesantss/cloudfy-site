import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from './pages/Home.jsx';
import {Signup} from "./pages/Signup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;

