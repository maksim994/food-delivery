import React from "react";
import styled from "styled-components";
// import Supplements from "../Style/Supplements";


const ChoicesWrapp = styled.div`
  max-width: 500px;
  column-count: 2;
  margin: 10px auto;
  gap: 20px
`;

const ChoicesLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ChoicesRadio = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;



export function Choices( {openItem, choice, changeChoices} ){
  return (
    <>
      <h3>Выбирай</h3>
      <ChoicesWrapp>

        {openItem.choices.map((item, i) => (
          <ChoicesLabel key={i}>
            <ChoicesRadio 
              type="radio"
              name="choices"
              checked={choice === item}
              value={item} 
              onChange={changeChoices}
            />
            {item}
          </ChoicesLabel>
        ))}
        
      </ChoicesWrapp>

    </>
  )
} 