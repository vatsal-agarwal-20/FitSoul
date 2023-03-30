import React from 'react'
import { Link } from 'react-router-dom'
import './exercise.css'

function ExerciseSelect(props) {
  return (
    <div class="container">
    <Link to={`/${props.link}`}>
    <img src={props.img} alt="Avatar" className="image"/>
    <div class="overlay">
    <div class="text">{props.text}</div>
    </div>
    </Link>
    </div>
  )
}

export default ExerciseSelect