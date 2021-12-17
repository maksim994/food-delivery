import React, {useRef, useContext} from 'react';
import styled from 'styled-components';

import { totalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'

import trashImage from '../../images/trash.svg';

import { Context } from '../Functions/context';

const OrderItemStyles = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0px;
  align-items: center;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right:10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Toppings = styled.div`
  color: #9A9A9A;
  width: 100%
`;


export const OrderListItem  = ({ order, index, deleteItem }) => {

  const { openItem: {setOpenItem} } = useContext(Context);

  const topping = order.topping.filter(item=> item.checked)
    .map(item => item.name)
    .join(', '); 

  const refDeletaButton = useRef(null);

  return (
    <OrderItemStyles onClick={(e) => e.target !== refDeletaButton.current && setOpenItem({...order, index})}>
    <ItemName>{order.name} {order.choice}</ItemName>
    <span>{order.count}</span>
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
    <TrashButton ref={refDeletaButton}  onClick={() => deleteItem(index)}/>
    {topping && <Toppings>Допы: {topping}</Toppings>}
  </OrderItemStyles>
  )
}