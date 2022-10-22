import { useEffect, useState } from "react";
import styled from "styled-components";
import Score from "./Score";

const Wrapper = styled.div`
  transition: background-color 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.bgColor ? `#${props.bgColor}` : "white"};
  width: 100vw;
  height: 100vh;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Info = styled.div`
color: black;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  padding: 4px;
  transition: background-color 0.24s, box-shadow 0.24s;
  margin: 14px;
  
`

const Button = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  color: black;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  padding: 4px 8px;
  display: inline-block;
  min-height: 28px;
  transition: background-color 0.24s, box-shadow 0.24s;
  margin: 14px;
`;

function App() {
  const [colors, setColors] = useState(["ffffff", "000000", "ff0000"]);
  const [correctColor, setCorrectColor] = useState("000000");
  const [guessedColor, setGuessedColor] = useState("000000");
  const [score, setScore] = useState(0);

  const handleClick = (e) => {
    setGuessedColor(e.target.value);
    if (e.target.value == correctColor) {
      setScore(score + 1);
      setNewColors();
      console.log(`Well done, the answer is: %c#${correctColor}`, `color: #${correctColor}`);
    } else {
      console.log(`wrong, the correct answer is: %c#${correctColor}`, `color: #${correctColor}`);
      setNewColors();
      setScore(0);
    }
  };

  const setNewColors = () => {
    let newColorSet = [];
    colors.map(() => {
      newColorSet.push(
        Math.floor(Math.random() * (16777215 - 1048576 + 1) + 1048576).toString(
          16
        )
      );
    });
    setColors(newColorSet);
    setCorrectColor(newColorSet[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    setNewColors();
  }, []);

  return (
    <Wrapper bgColor={correctColor}>
      <div>
        <Info>
        Guess page background color
        </Info>
        <Score guessedColor={guessedColor} score={score} />
        <div>
          {colors.map((color, i) => {
            return (
              <Button key={i} value={color} onClick={handleClick}>
                #{color}
              </Button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
