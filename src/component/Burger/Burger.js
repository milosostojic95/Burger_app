import React from 'react';
import classes from './BurgerIngredient.moodule.css';

const burgerIngridiant = (props) => {
  let ingrediend = null;
  switch (props.type) {
    case('bread-bottom'):
      ingrediend = <div className={classes.BreadBottom}></div>;
      break;
    case ('bread-top'):
      ingrediend = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case ('meat'):
      ingrediend = <div className={classes.Meat}></div>
      break;
    case ('cheese'):
      ingrediend = <div className={classes.Cheese}></div>
      break;
    case ('salad'):
      ingrediend = <div className={classes.Salad}></div>
      break;
    case ('bacon'):
      ingrediend = <div className={classes.Bacon}></div>
      break;
    default:
      ingrediend = null;
  }
  return ingrediend;
};


export default burgerIngridiant;
