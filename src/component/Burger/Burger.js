import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



const burger = (props) => {
  let transformIngrediants = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_,i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  }).reduce((arr, el) => {
      return arr.concat(el);
    },[]
  );

  if(transformIngrediants.length === 0) {
    transformIngrediants = <p>Please start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformIngrediants}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;
