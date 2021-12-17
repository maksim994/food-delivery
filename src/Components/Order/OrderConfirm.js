import React, {useContext} from "react";
import styled from "styled-components";

import { Overlay } from "../Modal/ModalItem";
import { OrderTitle, Total, TotalPrice } from "./Order";
import { ModalButton } from '../Style/ModalButton';

import { projection } from '../Functions/secondaryFunctions';
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';

import { Context } from "../Functions/context";

const Modal = styled.div`
 background-color: #FFF;
 width: 600px;
 padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
`

const rulesData = {
	itemName: ['name'],
	price: ['price'],
	count: ['count'],
	topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : 'no topping' ],
	choices: ['choices', item => item ? item : 'no choices' ],
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref('orders').push().set({
    name: authentication.displayName,
    email: authentication.email,
    order: newOrder
  });
}

export const OrderConfirm = () => {

  const {
    orders: { orders, setOrders},
    auth: { authentication },
    orderConfirm: { setOpenOrderConfirm },
    firebaseDataBase
  } = useContext(Context);

  const dataBase = firebaseDataBase();

  const total = orders.reduce( (result, order) => 
      totalPriceItems(order) + result, 0);

  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Осталось только подтверить</Text>
        <Total>
          <span>Итог</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ModalButton
          onClick={() => {
            sendOrder(dataBase, orders, authentication);
            setOrders([]);
            setOpenOrderConfirm(false);
          }}
        >
          Подтвердить
        </ModalButton>
      </Modal>
    </Overlay>
  )

  
}