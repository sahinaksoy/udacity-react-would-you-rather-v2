import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
class Login extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Welcome to the Would You Rather App!</h1>
          <p className="lead">Please sign in to continue</p>
          <hr className="my-2" />
          {/* TODO : SemanticUI list box add */}
        </Jumbotron>
      </div>
    );
  }
}

export default Login;
