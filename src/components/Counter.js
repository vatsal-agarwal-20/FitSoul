import React, {useRef, useEffect, useState} from 'react'
import { Pose } from '@mediapipe/pose'
import * as cam from '@mediapipe/camera_utils'
import Webcam from 'react-webcam'
import AngleBetweenThreePoints from './Angle'
import { Link } from 'react-router-dom'
import bicepcurls from '../assets/images/bicepcurls.jpg'
import crunches from '../assets/images/crunches.jpg'
import squats from '../assets/images/squats.jpg'
import pushups from '../assets/images/pushups.jpg'
import { Button } from '@mui/material'
// import './counter.css'

const styles = {
    webcam: {
        position: "absolute",
        marginRight: "auto",
        marginLeft: "auto",
        left: 40,
        right: 800,
        top: 40,
        textAlign: "center",
        zIndex: 9,
        width: 960,
        height: 720,
      },
      countBox: {
        position: "absolute",
        marginRight: "auto",
        marginLeft: "auto",
        left: 1100,
        right: 0,
        top: 600,
        width: 400,
        height: 100,
      },
      selectBox: {
        position: "absolute",
        marginRight: "auto",
        marginLeft: "auto",
        left: 1000,
        right: 0,
        top: 250,
        textAlign: "center",
        width: 300,
        // color: "#05386B",
        color: "#fff",
        // background: "#8EE4AF",
        background: "#000"
      },
      back: {
        position: "absolute",
        marginRight: "auto",
        marginLeft: "auto",
        left: 1700,
        right: 0,
        top: 850,
      },
};

const exerciseInfo = {
    bicepcurls: {
      index: [12, 14, 16],
      ul: 160,
      ll: 50,
    },
    squats: {
      index: [24, 26, 28],
      ul: 170,
      ll: 50,
    },
    pushups: {
      index: [12, 14, 16],
      ul: 160,
      ll: 80,
    },
    crunches: {
      index: [12, 24, 26],
      ul: 130,
      ll: 50,
    },
  };

let count=0;
let direction=0;
let angle=0;

function Counter(props) {

    let imgSrc;
    if(props.exercise === 'bicepcurls') imgSrc = bicepcurls;
    else if(props.exercise === 'crunches') imgSrc = crunches;
    else if(props.exercise === 'squats') imgSrc = squats;
    else if(props.exercise === 'pushups') imgSrc = pushups;

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    let camera = null;
    const countBox = useRef(null);

    function checkResult(results)
    {
        if(results.poseLandmarks)
        {
            const position = results.poseLandmarks;

            // we will set the height and width of the canvas
            canvasRef.current.width = webcamRef.current.video.videoWidth;
            canvasRef.current.height = webcamRef.current.video.videoHeight;

            const width = canvasRef.current.width;
            const height = canvasRef.current.height;

            // creating an array of points for the required data points for the corresponding exercise
            // for eg: for bicepcurls we have datapoints [12,14,16] i.e
            // they are points for right shoulder, right elbow and right wrist respectively
            const updatedPos = [];
            const indexArray = exerciseInfo[props.exercise].index;

            for(let i=0;i<3;i++)
            {
                updatedPos.push({
                    x: position[indexArray[i]].x * width,
                    y: position[indexArray[i]].y * height
                });
            }

            // we will find the angle between the three points which we pushed into the updatedPos array
            angle = Math.round(AngleBetweenThreePoints(updatedPos));

            // Now we will check the conditions for counting reps
            // we have taken the direction variable as a binary variable
            // i.e 0 is down and 1 is up
            if(angle > exerciseInfo[props.exercise].ul)
            {
                if(direction === 0)
                {
                    console.log("count: ", count);
                    console.log("direction: ", direction);
                    console.log("angle: ", angle);
                    direction=1;
                } 
            }
            if(angle < exerciseInfo[props.exercise].ll)
            {
                if(direction === 1)
                {
                    count += 1;
                    console.log("count: ", count);
                    console.log("direction: ", direction);
                    console.log("angle: ", angle);
                    direction=0;
                }
            }

            // Now we will start drawing lines to connect the datapoints obtained from the posenet API
            const canvasElement = canvasRef.current;
            const canvasCtx = canvasElement.getContext("2d");

            canvasCtx.save();

            // clearing the canvas to start over connecting the points for each frame
            canvasCtx.clearRect(0,0,canvasElement.width,canvasElement.height);

            // drawing the lines 
            for(let i=0;i<2;i++)
            {
                canvasCtx.beginPath();
                canvasCtx.moveTo(updatedPos[i].x, updatedPos[i].y);
                canvasCtx.lineTo(updatedPos[i+1].x, updatedPos[i+1].y);
                canvasCtx.lineWidth = 2;
                canvasCtx.strokeStyle = "white";
                canvasCtx.stroke();
            }
            for(let i=0;i<3;i++)
            {
                canvasCtx.beginPath();
                canvasCtx.arc(updatedPos[i].x, updatedPos[i].y,10,0, 2* Math.PI);
                canvasCtx.fillStyle = "#aaff00";
                canvasCtx.fill();
            }

            canvasCtx.font = "40px aerial"
            if(isNaN(angle)) angle=0;
            canvasCtx.fillText(angle,updatedPos[1].x + 15, updatedPos[1].y + 50);
            canvasCtx.restore();
        }
    }

    useEffect(()=>{
        console.log("rendered");

        count=0;
        direction=0;

        const pose = new Pose({locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
          }});
        pose.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
        });

        pose.onResults(checkResult);

        if(typeof webcamRef.current !== "undefined"
        && webcamRef.current !== null
        )
        
        {
            camera = new cam.Camera(webcamRef.current.video,{
                onFrame: async () => {
                    countBox.current.value = count

                    await pose.send({image: webcamRef.current.video})
                },
                width: 640,
                height: 640,
            })
            camera.start();
        }
    });

    function resetCount(e)
    {
        e.preventDefault();
        console.log("reset clicked");
        count=0;
        direction=0;
    }
    
  return (
    <div className='exercise-container' style={{backgroundColor: "black", width: "100%", position: "relative", height: "100%"}}>
        <div className='info-container' style={styles.selectBox}>
            <h1>{props.name}</h1>
            <img src={imgSrc} width="200" alt="exercise_image" />
            <br/>
                <h1>Count</h1>
                <input
            variant="filled"
            ref={countBox}
            value={count}
            style={{ height: 50, fontSize: 40, width: 80, textAlign: "center" }}
          />
                <br/>
                <br/>
                <div className='buttons'>
                <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={resetCount}
          >
            Reset Counter
          </Button>
          <br/>
          <br/>

        
                <Link
                to="/workout"
                >
                    <Button
                    size='large'
                    variant='contained'
                    color='success'
                    >
                        Back
                    </Button>
                </Link>
                </div>
        </div>
        <div className='camera-container'>
        <Webcam ref={webcamRef} style={styles.webcam} width={720} height={720} />
        <canvas ref={canvasRef} style={styles.webcam}/>
        </div>
    </div>
  );
}

export default Counter