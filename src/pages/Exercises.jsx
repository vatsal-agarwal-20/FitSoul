import React from 'react'
import bicepcurls from '../assets/images/bicepcurls.jpg'
import crunches from '../assets/images/crunches.jpg'
import squats from '../assets/images/squats.jpg'
import pushups from '../assets/images/pushups.jpg'
import ExerciseSelect from '../components/ExerciseSelect'

function Exercises() {
  return (
    <div className='counter-page' style={{backgroundColor: "black", width: "100%"}}>
    <div className='row1' style={{display: "flex", alignItems: "center"}}>
    <ExerciseSelect img={bicepcurls} text="Bicep Curls" link="bicepcurls"/>
    <ExerciseSelect img={crunches} text="Crunches" link="crunches"/>
    </div>
    <br/>
    <div className='row2' style={{display: "flex"}}>
    <ExerciseSelect img={squats} text="Squats" link="squats"/>
    <ExerciseSelect img={pushups} text="Push Ups" link="pushups"/>
    </div>
    </div>
  )
}

export default Exercises