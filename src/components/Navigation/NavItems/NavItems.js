import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.css';


const NavItems = () => {
    return (

        <ul className={classes.NavItems}>
            <NavItem link={'/'} active >
                SUPER BUIRGER
            </NavItem>
            <NavItem link={'/'} >
                SUPER BUIRGER
            </NavItem>
        </ul>
    )
    
}

export default NavItems;