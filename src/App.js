import Navbar from "./components/Navbar/Navbar";
// import Slider from "./components/Slider";
import Cards from "./components/Cards/Cards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import FilterNav from "./components/FilterNavbar/FilterNav";
import Restaurant from "./components/Cards/Restaurant";
import Home from "./Home";
import Slider from "./components/Slider";
function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Restaurant/>} />
        
      </Routes>
    </Router>
    </>
  );
}
export default App;