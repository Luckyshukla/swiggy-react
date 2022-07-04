import React from 'react'
import "./FilterNav.css"
function FilterNav() {
  return (
    <main className="cards_container">
  <div className="filter_nav">
    <div className="Count">
      <div>50 Restaurants</div>
    </div>
    <ul className="filter-links">
      <li>
        <a className="active" href="#"> Relevance</a>
      </li>
      <li>
        <a href="#">Relevance</a>
      </li>
      <li>
        <a href="#">Rating</a>
      </li>
      <li>
        <a href="#">Cost: High To Low</a>
      </li>
      <li>
        <a href="#">Cost: Low To High</a>
      </li>
      <li>
        <a href="#">Filters</a><span><i className="fa fa-filter"></i></span>
      </li>
    </ul>
  </div>
  
</main>
  )
}

export default FilterNav