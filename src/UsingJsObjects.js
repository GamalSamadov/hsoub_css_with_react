import React, { useState } from "react";


const Objects = () => {
  const [isBlue, setBlue] = useState(false);

  const parentStyle = {
    textAlign: "center",
  }

  const titleStyle = {
    fontSize: "30px",
    color: "#636363",
  }

  const subtitleStyle = {
    fontSize: "20px",
  }

  const buttonStyle = {
    color: "#fff",
    border: "2px solid #1e4aad",
    padding: "7px 15px",
    fontSize: "16px",
    backgroundColor: "#1e4aad",
    cursor: "pointer",
    borderRadius: "4px",
  }

  if (isBlue) {
    titleStyle['color'] = "blue";
  } else {
    titleStyle['color'] = 'black';
  }

  return (
    <div style={parentStyle}>
      <h1 style={titleStyle}>First text</h1>
      <h2 style={subtitleStyle}>Second text</h2>
      <button style={buttonStyle} onClick={() => setBlue(!isBlue)}>Change color</button>
    </div>
  );
}

export default Objects;