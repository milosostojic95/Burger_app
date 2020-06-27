import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../component//Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';

const INGRREDIEN_PRICE = {
  'salad': 0.4,
  'bacon': 0.7,
  'meat': 1.3,
  'cheese': 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0
    },
    totalPrice: 4,
    purchaseable: false,
    showModal: false
  }

  showModalHeandler = () => {
    this.setState({showModal: true});
  }

  removeModalHeandler = () => {
    this.setState({showModal: false});
  }

  continueModalHeandler = () => {
    alert('continuing')
  }

  updatePurcaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map((igKey) => {
      return ingredients[igKey];
    }).reduce((sum, el) => {
      return sum + el;
    },0);
    this.setState({purchaseable: sum > 0})
  }

  addIngredientHeandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGRREDIEN_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.updatePurcaseState(updatedIngredients);
  }

  removeIngredientHeandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCounted = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCounted;
    const priceDeducation = INGRREDIEN_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeducation;
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.updatePurcaseState(updatedIngredients);
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Modal show = {this.state.showModal} modalClosed = {this.removeModalHeandler}>
          <OrderSummary
            ingredients= {this.state.ingredients}
            purchaseCanceled= {this.removeModalHeandler}
            purchaseCantinued = {this.continueModalHeandler}
            price= {this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded = {this.addIngredientHeandler}
          ingredientRemove = {this.removeIngredientHeandler}
          disabled = {disabledInfo}
          price = {this.state.totalPrice}
          purchaseable = {this.state.purchaseable}
          clicked = {this.showModalHeandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
