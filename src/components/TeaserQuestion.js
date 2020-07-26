import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { Button, Radio } from "semantic-ui-react";

class TeaserQuestion extends Component {
  render() {
    const { question } = this.props;
    return (
      <Card>
        <CardBody>
          <p>{question.optionOne.text}</p>
          <p>or...</p>
        </CardBody>
        <Button primary>Answer Pool</Button>
      </Card>
    );
  }
}

export default TeaserQuestion;
