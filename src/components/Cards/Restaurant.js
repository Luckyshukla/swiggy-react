import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Restaurant.css';
import Menu from '../Menu/Menu';
import Direction from './Direction';
import Searchfunc from './Searchfunc';
function Restaurant() {
  let { id } = useParams();
  const [restaurantName, setRestaurantNAme] = useState([]);
  const getRestaurantData = async () => {
    try {
      const response = await fetch(`http://training.panorbitprojects.com/api/RestaurantDetails/?id=${id}`);
      const resp = await response.json();
      const jsondata = resp.data;
      setRestaurantNAme(jsondata);
    } catch (e) {
      console.log(e);

    }

  }
  useEffect(() => {
    getRestaurantData();
  }, []);
  return (
    <>
    <Direction r_n = {restaurantName.name}/>
      <div className='hotel'>
        <div className='hotelcard'>
          <div className='restaur'>
            <div className='restaurant-img'>
              <img src={restaurantName.image} alt="reasturent-card"></img>
            </div>
            <div className='restaurant-details'>
              <div className='restaurant-name'>{restaurantName.name}</div>
              <div className='items'>Chinese, Desserts</div>
              {/* <div className='items'>{restaurantName.items[0]},{restaurantName.items[1]}</div> */}
              <div className='address'>{restaurantName.address}
                <span>| Change Outlet</span> </div>
              <div className='precise'>
                <div className='rating'>
                  <span><i class="fa fa-star"></i>{restaurantName.rating}</span>
                  <span className='ratingcount'>{restaurantName.ratingCount}Rating</span>
                </div>
                <div className='delivery-time'>
                  <span>{restaurantName.deliveryTime}</span>
                  <span className='dileverytime'>dilevery Time</span>
                </div>
                <div className='cost_for_two'>
                  <span>₹{restaurantName.costForTwo}</span>
                  <span className='costfor'>Cost for two</span>
                </div>
              </div>
            </div>
            <div className='offer-set'>
              <fieldset>
                <legend>OFFER</legend>
                <div className='offer-text'>
                <div className='text-offer'>50% off up to ₹100 + Flat ₹30 cashback with Paytm | Use....</div>
                <div className='offer-text2'>
                <div className='text-offer'>FREE DELivery</div>
                </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div className='searchfunc'>
        <Searchfunc/>
        </div> 
      </div>
      <Menu />
    </>
  )
}

export default Restaurant