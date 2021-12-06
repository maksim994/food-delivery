import React from 'react';
import styled from 'styled-components';
import { ModalButton } from './ModalButton';
import { OrderListItem } from './OrderListItem';


const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0px;
  background-color: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
  padding: 20px
`;
const OrderTitle = styled.h2`
  text-align: center;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;


const Total = styled.div`
  display: flex;
  margin: 0px 35px 30px;
  & span:first-child{
    flex-grow: 1
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
`;

export const Order = () => {
  return(
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      
      <OrderContent>
        <OrderList>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
        </OrderList>
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>5</span>
        <TotalPrice>3850 р</TotalPrice>
      </Total>
      <ModalButton>Оформить</ModalButton>
    </OrderStyled>
  )
}