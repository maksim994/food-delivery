import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  height: 40px;
  text-align: center;

`

const ButtonCount = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
`

const CountWrapperInput = styled.div`
  display: flex;
  align-items: center;
`;

export const CountItem = ({ count, setCount, onChange }) => {
  return(
    <CountWrapper>
      <spann>Количество</spann>
      <CountWrapperInput>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1) }>-</ButtonCount>
        <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
        <ButtonCount onClick={() => setCount(count + 1) } >+</ButtonCount>
      </CountWrapperInput>
    </CountWrapper>
  )
}


