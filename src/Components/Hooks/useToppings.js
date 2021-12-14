import { useState } from "react";

const getToppings = toppings => toppings.map(item => ({
  name: item,
  checked: false
}));

export function useToppings(openItem){
  const readyToppings = openItem.toppings ? getToppings(openItem.toppings) : [];  
  const [toppings, setToppngs] = useState(readyToppings);
  
  const checkToppings = index => {
    setToppngs(toppings.map(( item, i ) => {

      const newItem = {...item}
      if (i === index) {
        newItem.checked = !newItem.checked
      }
      return newItem;
    }));
  }

  return { toppings, checkToppings }
}