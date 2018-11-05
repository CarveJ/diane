import React from 'react';
import ShoppingListRow from './ShoppingListRow'
import fakeFood from '../fakeObjData'

const ShoppingList = ({foodListObj = fakeFood}) => {
  const { score } = foodListObj

  let arrayOfFoods = []

  Object.keys(foodListObj).map((foodGroup,index)=>{
    if (Array.isArray(foodListObj[foodGroup])) {
      arrayOfFoods = [...arrayOfFoods,...foodListObj[foodGroup]]
    }
  })

  const shoppingListRows = arrayOfFoods.map((foodItem,i)=>{
    return <ShoppingListRow {...foodItem}/>
  })

  return (
    <div>
     {shoppingListRows}
    </div>
  );
}

export default ShoppingList;
