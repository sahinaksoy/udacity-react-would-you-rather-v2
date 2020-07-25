import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

class QuestionDetail extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default QuestionDetail;
