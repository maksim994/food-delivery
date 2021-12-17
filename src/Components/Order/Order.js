import React, {useContext} from 'react';
import styled from 'styled-components';

import { ModalButton } from '../Style/ModalButton';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunctions'

import { Context } from '../Functions/context';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0px;
  background-color: #fff;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
  padding: 20px
`;
export const OrderTitle = styled.h2`
  text-align: center;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

export const Total = styled.div`
  display: flex;
  margin: 0px 35px 30px;
  & span:first-child{
    flex-grow: 1
  }
`;

export const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px
`;

const EmptyList = styled.p`
  margin: 20px 0px;
  text-align: center;
`;

export const Order = () => {

  const {
    auth: { authentication, logIn },
    orders: { orders, setOrders },
    orderConfirm : { setOpenOrderConfirm }
  } = useContext(Context);


  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  }

  const total = orders.reduce( (result, order) => 
      totalPriceItems(order) + result, 0);
  const totalCouner = orders.reduce( (result, order) => 
      order.count + result, 0);

  return(
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      
      <OrderContent>
        {orders.length ?
          <OrderList>
            {orders.map((order, index) => <OrderListItem 
              key={index}
              order={order} 
              deleteItem={deleteItem}
              index={index}
            />)}
          </OrderList> : 
          <EmptyList>Список заказа пуст</EmptyList>
        }
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{totalCouner}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <ModalButton onClick={() => {
        if (authentication){
          setOpenOrderConfirm(true)
        } else{
          logIn();
        }
      }}>Оформить</ModalButton>
    </OrderStyled>
  )
}