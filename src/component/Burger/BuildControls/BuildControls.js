import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuldControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <h3>Current price: <strong>{props.price.toFixed(2)}$</strong></h3>
      {controls.map(ctrl => (
        <BuildControl
          key = {ctrl.label}
          label = {ctrl.label}
          added = {() => props.ingredientAdded(ctrl.type)}
          removed = {() => props.ingredientRemove(ctrl.type)}
          disabled = {props.disabled[ctrl.type]}
        />
      )
      )}
      <button
        className={classes.OrderButton}
        disabled = {!props.purchaseable}
        onClick= {props.clicked}>
          ORDER NOW
      </button>
    </div>
  )
}

export default buildControls;
