import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
  return (
    <li key={igKey + 1}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}

    </li>
    )
  })

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}</strong>$</p>
      <p>Continuo to Checkout?</p>
      <Button btnType='Success' clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType='Danger' clicked={props.purchaseCantinued}>CONTINUE</Button>
    </Aux>
  );
}

export default orderSummary;
