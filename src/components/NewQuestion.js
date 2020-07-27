import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Input,
} from "reactstrap";
import { Button } from "semantic-ui-react";

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
  render() {
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
            />
            <hr />
            <Input
              type="text"
              name="optionTwo"
              id="optionTwo"
              placeholder="Type option two"
              onChange={this.handleChange}
            />
            <br />
            <Button
              primary
              disabled={
                this.state.optionOne == "" || this.state.optionTwo == ""
              }
              onClick={() => {
                //TODO: handle add new question
                console.log(this.state);
              }}
            >
              Submit
            </Button>
          </CardBody>
        </Card>
      </section>
    );
  }
}

export default NewQuestion;
