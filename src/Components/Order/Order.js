import React from 'react';
import styled from 'styled-components';

import { ModalButton } from '../Style/ModalButton';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunctions'
import { toCurrencyString } from '../Functions/secondaryFunctions'


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

const OrderList = styled.ul``;

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

const EmptyList = styled.p`
  margin: 20px 0px;
  text-align: center;
`;


export const Order = ({ orders }) => {

  const total = orders.reduce( (result, order) => totalPriceItems(order) + result, 0);

  return(
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      
      <OrderContent>
        {orders.length ?
          <OrderList>
            {orders.map(order => <OrderListItem order={order} />)}
          </OrderList> : 
          <EmptyList>Список заказа пуст</EmptyList>
        }
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>5</span>
        <TotalPrice>{toCurrencyString(total)}</TotalPrice>
      </Total>
      <ModalButton>Оформить</ModalButton>
    </OrderStyled>
  )
}