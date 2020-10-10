import React from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';



const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    bacon: .3,
    meat: .7,
}



class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseable = (ingredients) => {
        
     
        const sum = Object.values(ingredients).reduce((acc, v) => {
            return acc + v;
        }, 0)
        this.setState({purchaseable: sum > 0})
    }
    

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type]
        this.setState({
            ingredients: updatedIngredients, totalPrice: newPrice
        })
        this.updatePurchaseable(updatedIngredients)

    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type]
        this.setState({
            ingredients: updatedIngredients, totalPrice: newPrice
        })
        this.updatePurchaseable(updatedIngredients)

    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }


    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <React.Fragment>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                    <h1>Current Price: ${this.state.totalPrice.toFixed(2)}</h1>
                <BuildControls   ordered={this.state.purchasing} purchaseable={this.state.purchaseable} disabledInfo={disabledInfo}  removeIngredientHandler={this.removeIngredientHandler}   addIngredientHandler={this.addIngredientHandler} />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;