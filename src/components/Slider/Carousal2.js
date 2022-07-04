import React, {useState, useRef, useEffect} from 'react'
import arrowr from "./arrow-right.svg";
import arrowl from "./arrow-left.svg";
import "./Carousal2.css";

const Carousal2 = () => {
  const [dataImg, setDataImg] = useState([]);



  useEffect(() => {
    const loadData = async () => {
      let response = await fetch(
        "http://training.panorbitprojects.com/api/GetCarousalData/"
      );
      let data = await response.json();
      setDataImg(data.data);
        };
       loadData()
      }, []);

console.log(dataImg.length)






let sliderRef = useRef(null);
let carousalRef = useRef(null);
let direction;

const nextImage= () => {
  direction = -1;
  carousalRef.current.style.justifyContent = 'center';
  sliderRef.current.style.transform = 'translate(-12.38%)';  
};


const prevImage = () => {
  direction = 1;
  carousalRef.current.style.justifyContent = 'center';    
  sliderRef.current.style.transform = 'translate(12.38%)';  
};





useEffect(()=>{

  let slider = document.querySelector('.slider');

slider.addEventListener('transitionend', function() { 
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'ease 0.6s';
  })
});
},[])



  return (
    <>
      <div className="parentContainer">
        <div className="container">
          <div className="carousel" ref={carousalRef}>
          <div className="slider" ref={sliderRef} >

            {dataImg.map((imgs, i) => (
              <div key={i} style={{ poistion: "relative", textAlign: "center " }}  >
                <div
                  
                  className="carImage"
                  style={{ backgroundImage: `url(${imgs.backgroundImage})` }}>
                
                  <h1>Flat 20% off</h1>
                </div>
              </div>
            ))}
          </div>
              </div>
         
        </div>
        <div className="controls">
          <button className="next"  onClick={nextImage}>
            <img src={arrowr} alt="arrow" />
          </button>
          <button className="prev" onClick={prevImage} >
            <img src={arrowl} alt="arroe" />
          </button>
        </div>
      </div>

 


    </>
  )
}

export default Carousal2
