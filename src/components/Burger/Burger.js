import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = ({ingredients}) => {
    
    let transformedIngreds = Object.keys(ingredients).map((igKey) => {
        return [...Array(ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />
        })
    }).reduce((arr, el) => {
        return [...arr, ...el]
    }, [])

    if (transformedIngreds.length === 0) {
        transformedIngreds = <p>Please start adding ingredients</p>
    }
    
    return (
        <div className={classes.Burger} >
            <BurgerIngredients type="bread-top" />
            {transformedIngreds}
            <BurgerIngredients type="bread-bottom" />

        </div>
    )
}

export default Burger;