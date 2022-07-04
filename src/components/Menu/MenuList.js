import { React, useState, useEffect } from 'react'
import foodSymbol from "../../Images/food-symbol.png"
import "./MenuList.css";
function MenuList(props) {

    return (
        <>
            {
                props.data.map((ele) => (
                    <div className='restaurant-data'>
                        <div className='type' id={ele}>{ele}</div>
                        <div className='count'>1 Items</div>
                        <div>{props.data1.filter((x) => x.Type === ele)
                            .map((x) => (
                                <div className='container-menu'>
                                    <div className='menu-list'>
                                    <div className='menu-item'>
                                        <div className='restaurant-food-name'>{x.name}</div>
                                        <div className='rupee'>₹{x.price}</div>
                                        <div className='details'>{x.details}</div>
                                    </div>
                                    <div className='visual'>
                                        <img src={x.image} alt="reasturent-card"></img>
                                        <div className='btn'><button>ADD</button></div>
                                    </div>
                                    </div>
                                </div>
                            ))}</div>
                    </div>
                ))
            }
        </>
    )
}

export default MenuList