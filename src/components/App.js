import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    const { handleInitialData } = this.props;
    handleInitialData();
  }
  render() {
    const { authUser } = this.props;
    return (
      <div
        className="container"
        style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}
      >
        {authUser == null ? <Login /> : <Navbar />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

const mapDispatchToProps = (dispatch) => ({
  handleInitialData: () => dispatch(handleInitialData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
