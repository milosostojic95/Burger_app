import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  const transformIngrediants = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_,i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformIngrediants}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;
