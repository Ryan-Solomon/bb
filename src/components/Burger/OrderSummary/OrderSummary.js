import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {


    const listedIngredients = Object.keys(props.ingredients).map((ingredName) => {
        return <li key={ingredName} ><span style={{textTransform: 'capitalize'}} >{ingredName}</span>: {props.ingredients[ingredName]} </li>
    })


    return (
    <React.Fragment>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients: </p>
            <ul>
                {
                    listedIngredients
                }
            </ul>
            <p>Total: $${props.price}</p>
            <p>Continue To Checkout?</p>
            <Button clicked={props.purchaseCancelled} btnType='Danger' >CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType="Success" >CONTINUE</Button>
    </React.Fragment>
)
}

export default OrderSummary;