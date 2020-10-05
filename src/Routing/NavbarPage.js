import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'
export default function NavbarPage() {
  return (
    <>
      <Navbar color="light" light expand="md">
        <Link to='/'>
          <NavbarBrand>Home</NavbarBrand>
        </Link>
        <Nav className="mr-auto" navbar>
          <Link to='/people'><NavItem>
            <NavbarBrand>People</NavbarBrand>
          </NavItem>
          </Link>
          <Link to='/addpeople'><NavItem>
            <NavbarBrand>Add People</NavbarBrand>
          </NavItem>
          </Link>
        </Nav>
      </Navbar>

    </>

  )
}

