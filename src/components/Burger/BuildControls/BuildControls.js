import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => {

    const renderedBuildControls = controls.map((controlObj, idx) => {
        return <BuildControl disabledInfo={props.disabledInfo[controlObj.type]} removeIngredientHandler={props.removeIngredientHandler} addIngredientHandler={props.addIngredientHandler} key={idx + controlObj.type} label={controlObj.label} type={controlObj.type} />
    })

    return (
        <div className={classes.BuildControls} >
            {renderedBuildControls}
            <button onClick={props.ordered} disabled={!props.purchaseable} className={classes.OrderButton} >
                Order Now
            </button>
        </div>
    )
}


export default BuildControls;