import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, MenuItem, Button, NavDropdown, FormGroup, FormControl} from 'react-bootstrap';
import Routes from './Routes';


class App extends Component {

  render() {
    return (
      <div className="NavContainer">
        <Navbar fixedTop inverse >
          <div className="navbar-header">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
              Brocko Photography
              </Link>

            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Form>
              <FormGroup className="search">
                <FormControl className="place" type="text" placeholder="Search" />
                </FormGroup>
                {' '}
                <Button className="searchButton" type="submit">
                  Search
                </Button>
              </Navbar.Form>

          </Navbar.Header>
          </div>
          <div >
          <Nav className="Navtabs" pullRight>

            <NavItem href="/">Home</NavItem>
            <NavItem href="/Services">Services</NavItem>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <MenuItem href="/Landscape">Landscape</MenuItem>
              <MenuItem href="/Travel">Travel</MenuItem>
              <MenuItem href="/Product">Product</MenuItem>
              <MenuItem divider />
              <MenuItem href="/More">More</MenuItem>
            </NavDropdown>
            <NavItem href="/About">About</NavItem>
            <Button className="Orderbutton" href="/Order">
              Order
            </Button>
          </Nav>
          </div>
        </Navbar>

      </div>

    );
  }
}

export default App;
