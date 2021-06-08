import React from "react";
import classes from './NavBar.module.scss';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
    <Navbar expand="xl" className={classes.container}>
      <Container className={classes.container}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={classes.link} href="/">ΜΑΡΚΕΣ</Nav.Link>
            <Nav.Link className={classes.link} href="/">SEASONAL</Nav.Link>
            <Nav.Link className={classes.link} href="/">NEW IN</Nav.Link>
            <Nav.Link className={classes.link} href="/">ΜΑΛΛΙΑ</Nav.Link>
            <Nav.Link className={classes.link} href="/">ΠΡΟΣΩΠΟ</Nav.Link>
            <Nav.Link className={classes.link} href="/">ΣΩΜΑ</Nav.Link>
            <Nav.Link className={classes.link} href="/">ΝΥΧΙΑ</Nav.Link>
            <Nav.Link className={classes.link} href="/">MAKEUP</Nav.Link>
            <Nav.Link className={classes.link} href="/">OUTFIT</Nav.Link>
            <Nav.Link className={classes.link} href="/">ΑΝΔΡΑΣ</Nav.Link>
            <Nav.Link className={classes.link} href="/">ΔΩΡΑ</Nav.Link>
            <Nav.Link className={classes.link} href="/">ΔΕΙΓΜΑΤΑ</Nav.Link>
            <Nav.Link className={classes.link} href="/">BLOG</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
};

export default NavBar;
