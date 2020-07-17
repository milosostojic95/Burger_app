import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  //this could be a functional component, doenst have to be a cllass
  componentDidUpdate() {
    console.log('[Order] WillUpdate')
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey + 1}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}

        </li>
        )
      });

    return(
      <Aux>
      <h3>Your Order</h3>
      <p>A delicious with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {this.props.price.toFixed(2)}</strong>$</p>
      <p>Continuo to Checkout?</p>
      <Button btnType='Success' clicked={this.props.purchaseCanceled}>CANCEL</Button>
      <Button btnType='Danger' clicked={this.props.purchaseCantinued}>CONTINUE</Button>
    </Aux>
    );
  }
}

export default OrderSummary;
