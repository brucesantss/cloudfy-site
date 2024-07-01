import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from './components/Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

