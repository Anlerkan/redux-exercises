import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  NavbarText
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

export default class Navi extends React.Component {
 render(){ return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand> <Link to="/">Northwind Store</Link></NavbarBrand>
        <NavbarToggler 
         />
        <Collapse 
         navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink> <Link to="/saveProduct">Add Product</Link></NavLink>
            </NavItem>
           
            <CartSummary/>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  )}
}
