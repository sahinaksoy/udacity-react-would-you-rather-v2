import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import { connect } from "react-redux";

class App extends Component {
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

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
