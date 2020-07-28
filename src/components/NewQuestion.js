import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, Input } from "reactstrap";
import { Button } from "semantic-ui-react";
import { handleSaveQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { authUser, handleSaveQuestion } = this.props;
    const { optionOne, optionTwo } = this.state;
    if (optionOne == optionTwo) {
      alert("Please type different option!");
    } else {
      handleSaveQuestion(optionOne, optionTwo, authUser);
      this.setState({
        optionOne: "",
        optionTwo: "",
        goHome: true,
      });
    }
  };
  render() {
    const { optionOne, optionTwo, goHome } = this.state;
    if (goHome) {
      return <Redirect to="/" />;
    }
    return (
      <section style={{ marginTop: 15 }}>
        <Card>
          <CardHeader>New pool</CardHeader>
          <CardBody>
            <CardTitle>Would you rather...</CardTitle>
            <Input
              type="text"
              name="optionOne"
              id="optionOne"
              placeholder="Type option one"
              onChange={this.handleChange}
              value={optionOne}
            />
            <hr />
            <Input
              type="text"
              name="optionTwo"
              id="optionTwo"
              placeholder="Type option two"
              onChange={this.handleChange}
              value={optionTwo}
            />
            <br />
            <Button
              primary
              disabled={
                this.state.optionOne == "" || this.state.optionTwo == ""
              }
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </CardBody>
        </Card>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleSaveQuestion: (optionOne, optionTwo, author) =>
    dispatch(handleSaveQuestion(optionOne, optionTwo, author)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
