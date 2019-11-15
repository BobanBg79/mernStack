import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import { authOperations } from '../modules/auth';

const AppNavbar = ({ token, user, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          {user ? `Hello ${user.name}` : 'MERN STACK APP'}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.google.com">External link</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Reset</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                {token && <DropdownItem onClick={logout}>Logout</DropdownItem>}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapState = state => {
  const { token, user } = state.auth;
  return { token, user };
};

const mapDispatch = {
  logout: authOperations.logout,
};

export default connect(mapState, mapDispatch)(AppNavbar);
