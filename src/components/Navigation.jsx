import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    Navbar, 
    Nav, 
    NavItem, 
    NavbarBrand 
} from "reactstrap";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Pizza maker</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink href="/order/pizza">Pizza</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/order/calzone">Calzone</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/ingredients">Ingredients</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Navigation;