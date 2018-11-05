import React from 'react';
import '../styles/ShoppingListRow.css'

const ShoppingListRow = ({foodName="Chocolate",calories=84,carbs=16,proteins=1,fats=2,quantity=10}) => (
  <div>
    <div className="shoppingListRow">
      <div className="informationBlock">{foodName}</div>
      <div className="informationBlock">{calories}</div>
      <div className="informationBlock">{proteins}</div>
      <div className="informationBlock">{carbs}</div>
      <div className="informationBlock">{fats}</div>
      <div className="informationBlock">{quantity}</div>
    </div>
  </div>
);

export default ShoppingListRow;
