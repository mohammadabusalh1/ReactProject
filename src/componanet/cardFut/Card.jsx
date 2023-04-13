import React from 'react'
import './card.css'
import { useState } from 'react';
const Card = (props) => {
  const [img,setImg] = useState(props.img);
  const [title,setTitle] = useState(props.title);
  return (
    <div id='card' style={{borderColor:props.color}}>
      <img src={img}/>
      <h6 id='title' style={{backgroundColor:props.color}}>{title}</h6>
    </div>
  )
}

export default Card
