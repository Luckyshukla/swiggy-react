import React from 'react'
import "./Searchfunc.css";
function Searchfunc() {
    return (
        <div className='func'>
            <div className='fav'>
                <i class="fa-regular fa-heart"></i>
                <span>
                    <label for="favi">Favourite</label></span>
            </div>
            
            <div className='veg-only'>
            <span>
                    <input type="checkbox" id="veg"></input>
                    
                    <label for="veg">Only Veg</label>
                </span>
            </div>
            <div className='search-dish'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>
                    <input type="text" placeholder="Search for dishes..."></input>
                </span>
            </div>

            <div></div>
        </div>
    )
}

export default Searchfunc