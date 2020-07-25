import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { Button, Radio } from "semantic-ui-react";

class AnswerQuestion extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { question, onSubmitClick } = this.props;
    return (
      <Card>
        <CardBody>
          <Radio
            label={question.optionOne.text}
            name="radioGroup"
            value="optionOne"
            checked={this.state.value === "optionOne"}
            onChange={this.handleChange}
          />
          <br />
          <Radio
            label={question.optionTwo.text}
            name="radioGroup"
            value="optionTwo"
            checked={this.state.value === "optionTwo"}
            onChange={this.handleChange}
          />
        </CardBody>
        <Button
          primary
          disabled={!this.state.value}
          onClick={() => {
            onSubmitClick(this.state.value);
          }}
        >
          Submit
        </Button>
      </Card>
    );
  }
}

export default AnswerQuestion;
