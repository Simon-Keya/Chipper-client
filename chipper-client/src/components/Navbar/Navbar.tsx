import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Navbar.scss';


interface NavbarProps {
  isLoggedIn: boolean;
  username: string;
}

const CustomNavbar: React.FC<NavbarProps> = ({ isLoggedIn, username }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar"> {/* Apply custom style */}
      <Container>
        <Navbar.Brand href="/">Chipper Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <NavDropdown title="Help" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Track & Place Order</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Order Cancellation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Returns & Refunds</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto"> {/* Align items to the right */}
            {isLoggedIn ? (
              <NavDropdown title={`Hello, ${username}`} id="user-dropdown">
                <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
