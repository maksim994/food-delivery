import React from "react";
import styled from "styled-components";

const ToppingsWrapp = styled.div`
  max-width: 500px;
  column-count: 2;
  margin: 10px auto;
  gap: 20px
`;

const ToppingsLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ToppingsCheckbox = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;



export function Toppings( {toppings, checkToppings} ){
  return (
    <>
      <h3>Добавки</h3>
      <ToppingsWrapp>

        {toppings.map((item, i) => (
          <ToppingsLabel kye={i}>
            <ToppingsCheckbox 
              type="checkbox" 
              checked={item.checked}
              onChange={() => checkToppings(i)}
              
            />
            {item.name}
          </ToppingsLabel>
        ))}
        
      </ToppingsWrapp>

    </>
  )
} 