import React from 'react';

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
            <p>Continue To Checkout?</p>
    </React.Fragment>
)
}

export default OrderSummary;