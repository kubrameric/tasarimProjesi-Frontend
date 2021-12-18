import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Slider } from "antd";
const Home = () => {
  function onChange(value) {
    console.log("onChange: ", value);
  }

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
  }

  return (
    <>
      <Slider
        defaultValue={30}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
      <Slider
        range
        step={10}
        defaultValue={[20, 50]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </>
  );
};

export default Home;
