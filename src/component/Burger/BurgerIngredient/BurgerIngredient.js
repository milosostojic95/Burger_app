import React , {Component} from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngridiant extends Component {
  render () {
    let ingrediend = null;
  switch (this.props.type) {
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
  }
};

BurgerIngridiant.propType = {
  type: PropTypes.string.isRequired // brings back eror if dont have input
};

export default BurgerIngridiant;
