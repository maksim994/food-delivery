import React from 'react';
import styled from 'styled-components';
import { ModalButton } from '../Style/ModalButton';
import { CountItem } from './CountItem';

import { useCount } from '../Hooks/useCount';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';

import { totalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions'

import { Toppings } from './Toppings';
import { Choices } from './Choices';


const Overlay = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
`

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`

const Banner = styled.div`
  height: 200px;
  width: 100%;
  background-color: #333;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`
const ModalContent = styled.div`
  padding: 20px;
`

const ModalContentTop = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TotalPriceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
`


export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {
  
  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = e => {
    if(e.target.id === 'overlay'){
      setOpenItem(null)
    }
  }

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null)
  }

  const addToOrder = () => {
    setOrders([...orders, order])
    setOpenItem(null)
  }



  return(
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <ModalContent>
          <ModalContentTop>
            <h2>{openItem.name}</h2>
            <p>{formatCurrency(openItem.price)}</p>
          </ModalContentTop>
        
          <CountItem {...counter} />

          {openItem.toppings && <Toppings {...toppings}/>}
          {openItem.choices && <Choices {...choices} openItem={openItem}/>}

          <TotalPriceItem>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>

          <ModalButton 
            onClick={isEdit ? editOrder :  addToOrder}
            disabled={order.choices && !order.choice}
          >{ isEdit ? 'Редактировать' : 'Добавить' }</ModalButton>
        </ModalContent>
      </Modal>
    </Overlay>
  )
}


