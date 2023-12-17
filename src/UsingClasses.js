import React, { useState } from "react";
import "./style.css";

const Classes = () => {
  const [isBlue, setBlue] = useState(false);
  let dynamicClass = isBlue ? "blue" : "black";
  return (
    <div className='text-center'>
      <h1 className={`title ${dynamicClass}`}>First text</h1>
      <h2 className='subtitle black'>Second text</h2>
      <button className='button' onClick={() => setBlue(!isBlue)}>Change color</button>
    </div>
  );
}

export default Classes;
