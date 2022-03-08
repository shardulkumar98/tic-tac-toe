import React, { useEffect, useState } from "react";
import {
  Heading,
  Container,
  Mainbox,
  BoxItem,
  InfoContainer,
  Para,
  ButtonContainer,
  Button,
} from "../styles/index";

console.log("welcome to Tic Tac Toe");

const initialState = ["", "", "", "", "", "", "", "", ""];

const Home = () => {
  const [gameState, setGameState] = useState(initialState);
  const [turn, setTurn] = useState(true);
  // console.log(gameState);

  const onSqClick = (index) => {
    let strings = Array.from(gameState);
    strings[index] = turn ? "X" : "0";
    setGameState(strings);
    setTurn(!turn);
    console.log(strings);
    console.log("clicked");
  };

  useEffect(() => {
    const winner = checkWin();
    if (winner) {
      alert(`${winner} Wins `);
    }
  }, [gameState]);

  // //Check Winner
  const checkWin = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  // Clear
  const onClear = () => {
    setGameState(initialState);
    console.log("clear");
  };

  return (
    <Container>
      <Heading>Welcome to the tic tac toe</Heading>
      <Mainbox>
        <BoxItem onClick={() => onSqClick(0)}>
          <span>{gameState[0]}</span>
        </BoxItem>
        <BoxItem onClick={() => onSqClick(1)}>
          <span>{gameState[1]}</span>
        </BoxItem>
        <BoxItem onClick={() => onSqClick(2)}>
          <span>{gameState[2]}</span>
        </BoxItem>
        <BoxItem onClick={() => onSqClick(3)}>
          <span>{gameState[3]}</span>
        </BoxItem>
        <BoxItem onClick={() => onSqClick(4)}>
          <span>{gameState[4]}</span>
        </BoxItem>
        <BoxItem onClick={() => onSqClick(5)}>
          <span>{gameState[5]}</span>
        </BoxItem>
        <BoxItem onClick={() => onSqClick(6)}>
          <span>{gameState[6]}</span>
        </BoxItem>
        <BoxItem onClick={() => onSqClick(7)}>
          <span>{gameState[7]}</span>
        </BoxItem>
        <BoxItem onClick={() => onSqClick(8)}>
          <span>{gameState[8]}</span>
        </BoxItem>
      </Mainbox>
      <InfoContainer>
        <Para>Lets Play!</Para>
        {/* 
        <span>Turn for {}</span>
        <br /> */}
        <ButtonContainer>
          <Button onClick={onClear}>Start Again</Button>
        </ButtonContainer>
      </InfoContainer>
    </Container>
  );
};

export default Home;
