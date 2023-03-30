import React from 'react'
import trikonasana from '../assets/images/trikonasana.jpg'
import virabhadrasana from '../assets/images/virabhadrasana.jpg'
import ExerciseSelect from '../components/ExerciseSelect'

function Yoga() {
  return (
    <div className='counter-page' style={{backgroundColor: "black", width: "100%", height: "87vh", overflowY: "hidden"}}>
    <div className='row1' style={{display: "flex", alignItems: "center"}}>
    <ExerciseSelect img={virabhadrasana} text="Virabhadrasana" link="virabhadrasana"/>
    <ExerciseSelect img={trikonasana} text="Trikonasana" link="trikonasana"/>
    </div>
    <br/>
    {/* <div className='row2' style={{display: "flex"}}>
    <ExerciseSelect img={squats} text="Squats" link="squats"/>
    <ExerciseSelect img={pushups} text="Push Ups" link="pushups"/>
    </div> */}
    </div>
  )
}

export default Yoga