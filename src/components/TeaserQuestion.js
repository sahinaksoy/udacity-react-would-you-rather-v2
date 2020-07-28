import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class TeaserQuestion extends Component {
  render() {
    const { question, answered } = this.props;
    return (
      <Card>
        <CardBody>
          <p>{question.optionOne.text}</p>
          <p>or...</p>
        </CardBody>
        {answered ? (
          <NavLink style={{ color: "white" }} to={`/question/${question.id}`}>
            <Button color="green">Answer Pool</Button>
          </NavLink>
        ) : (
          <NavLink style={{ color: "white" }} to={`/question/${question.id}`}>
            <Button primary>Show Results </Button>
          </NavLink>
        )}
      </Card>
    );
  }
}

export default TeaserQuestion;
