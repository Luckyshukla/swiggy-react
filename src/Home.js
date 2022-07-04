import React from 'react'
import FilterNav from "./components/FilterNavbar/FilterNav";
import Slider from './components/Slider';
import Cards from './components/Cards/Cards';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carousal2 from './components/Slider/Carousal2'
function Home() {
  return (
    <div>
         {/* <Router> */}
            {/* <Routes>
            <Route path="/" element={<Slider/>}/>
        <Route path="/restaurants" element={<FilterNav/>} />
            </Routes> */}
            {/* <Slider/> */}
            <Carousal2/>
            <FilterNav/>
            <Cards/>
         {/* </Router> */}
        
    </div>
  )
}

export default Home