import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Navbar, 
    Nav, 
    NavItem, 
    NavbarBrand,
    NavLink 
} from "reactstrap";

function Navigation(){
    return (
        <Navbar color="light" light expand="md">
            <Link className="navbar-brand" to="/">Pizza maker</Link>
            <Nav>
                <NavItem>
                    <Link className="nav-link" to="/order/pizza">Pizza</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/order/calzone">Calzone</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/ingredients">Ingredients</Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Navigation;