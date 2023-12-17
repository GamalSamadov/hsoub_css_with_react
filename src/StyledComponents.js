import React, { useState } from "react";
import styled from "styled-components";


const Styled = () => {
  const [isBlue, setBlue] = useState(false);

  const Cointainer = styled.div`
    text-align: center;
  `

  const Title = styled.h1`
    font-size: 30px;
    color: ${props => props.isBlue ? 'blue': "black"};
  `

  const SubTitle = styled.h2`
    font-size: 20px;
    color: black;
  `

  const Button = styled.button`
    color: #fff;
    border: 2px solid #1e4aad;
    padding: 7px 15px;
    font-size: 16px;
    background-color: #1e4aad;
    cursor: pointer;
    border-radius: 4px;
  `

  return (
    <Cointainer>
      <Title isBlue={isBlue}>First text</Title>
      <SubTitle>Second text</SubTitle>
      <Button onClick={() => setBlue(!isBlue)}>Change color</Button>
    </Cointainer>
  );
}

export default Styled;