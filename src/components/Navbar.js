import React, { Component } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";

class Navbar extends Component {
  state = {
    dropdownOpen: false,
  };
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };
  render() {
    const { dropdownOpen } = this.state;
    return (
      <Nav>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">New Pool</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Leader Board</NavLink>
        </NavItem>

        <Dropdown nav isOpen={dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav caret>
            User Name
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>LogOut</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    );
  }
}

export default Navbar;
