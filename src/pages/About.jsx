import React from 'react'

function About() {
  return (
    <div className='bg-black h-screen flex flex-col items-center'>
        <h1 className='pt-12 text-4xl text-white'>
            About FitSoul
        </h1>
        <div className='bg-black text-white w-1/2'>
            <p>
            <br/>
            Hey there! Welcome to FitSoul which helps you workout the right way XD
            <br/>
            <br/>
            I created this project because I wanted to develop something
          that can assist people while they work out. The main idea was to
          monitor a person while he/she is working out and give them feedback on
          their performance. Broadly how well he/she is performing that
          particular exercise. So we thought of dividing the project into two
          sections, one for the rep-based exercises and the other for Yoga.
            <br/>
            <br/>
            In the workout section, the number of reps that you perform
          of a particular exercise is counted and in the Yoga section, you are
          assisted in performing a Yoga exercise correctly with the help of
          markers tracked over your body which turn green when that particular
          body part is in right posture and at the correct angle for that Yoga
          Pose. Another thing to note is that with this approach of ML-assisted
          fitness, several discomforts and injuries which are caused due to an
          exercise performed in the wrong posture can be minimized.
            <br/>
            <br/>
            </p>        
        </div>
    </div>
  )
}

export default About