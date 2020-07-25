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
import { connect } from "react-redux";
import { logOut } from "../actions/authUser";

class Navbar extends Component {
  state = {
    dropdownOpen: false,
  };
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  handleLogout = (e) => {
    e.preventDefault();
    const { logOut } = this.props;
    logOut();
  };
  render() {
    const { dropdownOpen } = this.state;
    const { authUser, users } = this.props;
    const userName = users[authUser].name;
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
            {userName}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.handleLogout}>
              LogOut
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
