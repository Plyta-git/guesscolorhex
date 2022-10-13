import styled from "styled-components"

const Circle = styled.div`
display:flex;
justify-content:center;
align-items:center;
  transition: background-color 1s ease;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 50px;
  color: #fff;
  text-align: center;
  background: ${props =>`#${props.guessedColor}`};
  margin: 15px;
  &:hover::before{
    font-size: 12px;
    content:"Last color"
  }
  &:hover span {
  display: none;
}
`

const Score = ({score,guessedColor}) =>{
    return(
        <>
        <Circle guessedColor={guessedColor}><span>{score}</span></Circle>
        </>
    )
}

export default Score