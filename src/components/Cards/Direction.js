import {React,useState} from 'react'
import{Link} from "react-router-dom"
import "./Direction.css"
function Direction(props) {
  return (
    <div className='direction'>
        <Link  to={"/"}><span>Home /</span></Link>
        <span>Banglore /</span>
        <span>Jayanagar /</span>
        <span>{props.r_n}</span>
    </div>
  )
}

export default Direction