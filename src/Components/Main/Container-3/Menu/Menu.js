import React from 'react'
import NavBar from '../../../Header/NavBar'
import { useParams } from 'react-router-dom';

function Menu() {
  const { id } = useParams();
  console.log("The id of the particular restaurant is ", id);

  return (
    <div>
      <NavBar/>
      <h1>
        hi these is a menu section
      </h1>
    </div>
  )
}


function DisplayResturantItems(){
///// write the code bro 
}

export default Menu
