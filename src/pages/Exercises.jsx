import React from 'react'
import bicepcurls from '../assets/images/bicepcurls.jpg'
import crunches from '../assets/images/crunches.jpg'
import squats from '../assets/images/squats.jpg'
import pushups from '../assets/images/pushups.jpg'
import ExerciseSelect from '../components/ExerciseSelect'

function Exercises() {
  return (
    <div className='bg-black h-full'>
    <div className='flex pt-12 mb-10'>
    <ExerciseSelect img={bicepcurls} text="Bicep Curls" link="bicepcurls"/>
    <ExerciseSelect img={crunches} text="Crunches" link="crunches"/>
    </div>
    <div className='flex py-8'>
    <ExerciseSelect img={squats} text="Squats" link="squats"/>
    <ExerciseSelect img={pushups} text="Push Ups" link="pushups"/>
    </div>
    </div>
  )
}

export default Exercises