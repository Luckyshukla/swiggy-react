import React from 'react'
import {Link} from 'react-router-dom'
function Carddetails(props) {
  return (
    <div className="resturent_card" >
       {props.data.map(ele => (
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

export default Carddetails