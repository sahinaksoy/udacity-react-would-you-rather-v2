import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { Dropdown, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getInitialData } from "../actions/shared";

class Login extends Component {
  componentDidMount() {
    const { getInitialData } = this.props;
    getInitialData();
  }

  render() {
    const { users } = this.props;
    const optionList = Object.values(users).map((user) => {
      return {
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: true, src: user.avatarURL },
      };
    });

    return (
      <div
        className="row"
        style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}
      >
        <Jumbotron>
          <h1>Welcome to the Would You Rather App!</h1>
          <p className="lead">Please sign in to continue</p>
          <hr className="my-2" />
          <Dropdown
            placeholder="Select Profile"
            fluid
            selection
            options={optionList}
          />
          <p></p>
          <Button primary>Login</Button>
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getInitialData: () => dispatch(getInitialData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
