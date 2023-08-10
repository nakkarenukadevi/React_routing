import React from "react";
import { useState, useEffect } from "react";

const Body = () => {
  let [input, setinput] = useState("");
  function handelData(e) {
    setinput(e.target.value);
    console.log(input);
  }
  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={input}
        onChange={(e) => {
          handelData(e);
        }}
      />
      <button className="btn btn-primary" onClick={handelData}>
        click
      </button>
      <h1>name:{input}</h1>
    </>
  );
};

export default Body;
