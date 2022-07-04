import React, { useState, useEffect } from 'react'
import Carddetails from './Carddetails'
import './Cards.css'
import {Link} from 'react-router-dom'



function Cards() {
  // const [restaurantList, setRestaurantList] = useState([]);
  // const [page, setPage] = useState(1);

  // const getRestaurantData = async () => {
  //   const response = await fetch(`http://training.panorbitprojects.com/api/RestaurantsList/?page=${page}`);
  //   const resp = await response.json();
  //   const jsondata = resp.data.restaurants;
  //   setRestaurantList(prevState => [...prevState, ...jsondata,]);
  // }


  // useEffect(() => {
  //   getRestaurantData();
  // }, [page]);


  // const scrollEnd =()=>{
  //   if(page<5){
  //     setPage(page+1)
  //       }
    
  // }


  // window.onscroll = function(){
  //   if (window.innerHeight+document.documentElement.scrollTop === document.documentElement.offsetHeight){
  //     scrollEnd();
  //   }
  // }
  let pagenum = 1;
  const [cardData, setCardData] = useState([]);

const [page, setPage] = useState(pagenum);



useEffect(() => {

const loadCardData = async () => {

let response = await fetch(

`http://training.panorbitprojects.com/api/RestaurantsList/?page=${page}`

);

let data = await response.json();

let cdata = data.data.restaurants;

setCardData((prevstate) => [...prevstate, ...cdata]);

// console.log(data.data.restaurants);

};

loadCardData();

}, [page]);



const scrollToEnd = () => {

if (page < 5) {

setPage(page + 1);

}

};



window.onscroll = function () {

if (

window.innerHeight + document.documentElement.scrollTop ===

document.documentElement.offsetHeight

) {

scrollToEnd();

}

};
  return (
    // <Carddetails data = {restaurantList}/>
    // <div className="resturent_card">
    //   {restaurantList.map(ele => (
    //       <div className="hidden">
    //         <div className="card">
    //           <div className="img"><img src={ele.image} /></div>
    //           <div className="resturent_name">{ele.name}</div>
    //           <div className="dishes">{ele.items[0]},{ele.items[1]},{ele.items[2]},{ele.items[3]},{ele.items[4]}</div>
    //           <div className="measure">
    //             <div className="rating">{ele.rating}</div>
    //             <div>.</div>
    //             <div className="dilevery_time">{ele.deliveryTime}</div>
    //             <div>.</div>
    //             <div className="costForTwo">{ele.costForTwo}</div>
    //           </div>
    //           <div className="offer">{ele.offer}</div>
    //         </div>
    //         <div className="quick"><a href="#">Quick view</a></div>
    //       </div>
        
    //   ))}
    //   </div>
    



    <div className="resturent_card" >
    {cardData.map(ele => (
     <Link exact to={"/"+ele.id} style ={{textDecoration: "inherit",color: "inherit"}}>
       <div className="hidden">
         <div className="card">
           <div className="img"><img src={ele.image} alt ='Card '/></div>
           <div className="resturent_name">{ele.name}</div>
           <div className="dishes">{ele.items[0]},{ele.items[1]},{ele.items[2]},{ele.items[3]},{ele.items[4]}</div>
           <div className="measure">
             <div className="rating">{ele.rating}</div>
             <div>.</div>
             <div className="dilevery_time">{ele.deliveryTime}</div>
             <div>.</div>
             <div className="costForTwo">{ele.costForTwo}</div>
           </div>
           <div className="offer">{ele.offer}</div>
         </div>
         <div className="quick"><a href="#">Quick view</a></div>
       </div>
       </Link>
   ))}
   </div>
  )
}

export default Cards;