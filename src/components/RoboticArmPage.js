import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import axios from "axios";

import { Slider,Button } from "antd";
const Home = () => {


  const [m1, setM1] = useState(30)
  const [m2, setM2] = useState(30)
  const [m3, setM3] = useState(30)
  const [m4, setM4] = useState(30)
  const [m5, setM5] = useState(30)
  const [m6, setM6] = useState(30)


  const submitValues = async (m1,m2,m3,m4,m5,m6) => {
    const response = await axios.post(
      "http://localhost:8080/api/user/degrees",
      {
        "m1":m1,
        "m2":m2,
        "m3":m3,
        "m4":m4,
        "m5":m5,
        "m6":m6
      }
    ).then(res => console.log(res))
  }

  

  return (
    <>
    <div style={{"maxWidth" :"400px","margin":"0 auto 0 auto"}}>
      Angle 1 - {m1}°
      <Slider
      min={0}
      max={90}
          defaultValue={30}
          onChange={setM1}
          onAfterChange={setM1}
        />

    </div>
    <div style={{"maxWidth" :"400px","margin":"0 auto 0 auto"}}>
      Angle 2 - {m2}°
      <Slider
      min={0}
      max={90}
          defaultValue={30}
          onChange={setM2}
          onAfterChange={setM2}
        />

    </div>

    <div style={{"maxWidth" :"400px","margin":"0 auto 0 auto"}}>
      Angle 3 - {m3}°
      <Slider
      min={0}
      max={90}
          defaultValue={30}
          onChange={setM3}
          onAfterChange={setM3}
        />

    </div>

    <div style={{"maxWidth" :"400px","margin":"0 auto 0 auto"}}>
      Angle 4 - {m4}°
      <Slider
          min={0}
          max={90}
          defaultValue={30}
          onChange={setM4}
          onAfterChange={setM4}
        />

    </div>
    <div style={{"maxWidth" :"400px","margin":"0 auto 0 auto"}}>
      Angle 5 - {m5}°
      <Slider
      min={0}
      max={90}
          defaultValue={30}
          onChange={setM5}
          onAfterChange={setM5}
        />

    </div>
    <div style={{"maxWidth" :"400px","margin":"0 auto 0 auto"}}>
      Angle 6 - {m6}°
      <Slider
      min={0}
      max={90}
          defaultValue={30}
          onChange={setM6}
          onAfterChange={setM6}
        />

    </div>

    <div style={{"width" :"100%","display":"flex","justifyContent": 'center'}}>
    <Button onClick={()=>submitValues(m1,m2,m3,m4,m5,m6)} style={{"maxWidth" :"400px","marginTop" : "20px "}} type="primary">Submit</Button>

    </div>
    

   

    


     
     
    </>
  );
};

export default Home;
