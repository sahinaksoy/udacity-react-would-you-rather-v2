import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { Dropdown, Button } from "semantic-ui-react";

class Login extends Component {
  render() {
    const friendOptions = [
      {
        key: "sarahedo",
        text: "sarahedo",
        value: "sarahedo",
        image: { avatar: true, src: "../images/sarahedo.png" },
      },
      {
        key: "tylermcginnis",
        text: "tylermcginnis",
        value: "tylermcginnis",
        image: { avatar: true, src: "../images/tylermcginnis.png" },
      },
      {
        key: "johndoe",
        text: "johndoe",
        value: "johndoe",
        image: { avatar: true, src: "../images/johndoe.png" },
      },
    ];

    return (
      <div
        className="row"
        style={{ maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Jumbotron>
          <h1>Welcome to the Would You Rather App!</h1>
          <p className="lead">Please sign in to continue</p>
          <hr className="my-2" />
          <Dropdown
            placeholder="Select Profile"
            fluid
            selection
            options={friendOptions}
          />
          <p></p>
          <Button primary>Login</Button>
        </Jumbotron>
      </div>
    );
  }
}

export default Login;
