import React from 'react';
import classes from './BuildControl.css';
 

const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl} >
            <div className={classes.Label} >
                {props.label}
                <button  onClick={() => props.addIngredientHandler(props.type)} className={classes.less} >More</button>
                <button disabled={props.disabledInfo} onClick={() => props.removeIngredientHandler(props.type)} className={classes.more} >Less</button>
            </div>
        </div>
    )
}

export default BuildControl;