import React from 'react'
import './Slider.css'
function Slider() {
  return (
    <div className="parentContainer">
    <div className="container">
      <div className="carousel">
        <div className="slider">

        </div>
      </div>
      <div className="controls">
        <button className="next" onclick="next(-1)"><i className="fa fa-arrow-right"></i></button>
        <button className="prev" onclick="prev(1)"><i className="fa fa-arrow-left"></i></button>
      </div>
    </div>
  </div>
  )
}

export default Slider