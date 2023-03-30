import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const styles = {
    back: {
        position: "absolute",
        margin: "0 auto",
        right: "300px",
        top: "150px",

    },
}

function About() {
  return (
    <div>
        <h1 style={{fontSize: "1.5rem", marginLeft: "20%", marginTop: "5%"}}>
            About FitSoul
        </h1>
        <div style={{
            color: "#000000",
            marginLeft: "10%",
            marginRight: "50%",
            backgroundColor: "white"
        }}>
            <p style={{marginLeft: "3%",
        fontSize: "1 rem",
        marginRight: "3%"}}>
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

        <div style={styles.back}>
        <Link to="/">
            <Button size='large' variant='contained' color='primary'>
                BACK
            </Button>
        </Link>
        </div>
    </div>
  )
}

export default About