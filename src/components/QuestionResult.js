import React, { Component, useReducer } from "react";
import { Card, CardBody } from "reactstrap";
import { Progress } from "reactstrap";
class QuestionResult extends Component {
  render() {
    const { question, user } = this.props;
    const optionOneAnswerCount = question.optionOne.votes.length;
    const optionTwoAnswerCount = question.optionTwo.votes.length;
    const totalAnswer = optionOneAnswerCount + optionTwoAnswerCount;
    const userAnswer = user.answers[question.id];
    return (
      <Card>
        <CardBody>
          <div className="text-center">{question.optionOne.text}</div>
          <Progress
            value={optionOneAnswerCount}
            max={totalAnswer}
            color={
              optionOneAnswerCount > optionTwoAnswerCount
                ? "success"
                : "warning"
            }
          >
            {optionOneAnswerCount} of {totalAnswer}
            {userAnswer == "optionOne" && <> (Your Vote)</>}
          </Progress>
          <br />
          <div className="text-center">{question.optionTwo.text}</div>
          <Progress
            value={optionTwoAnswerCount}
            max={totalAnswer}
            color={
              optionOneAnswerCount < optionTwoAnswerCount
                ? "success"
                : "warning"
            }
          >
            {optionTwoAnswerCount} of {totalAnswer}
            {userAnswer == "optionTwo" && <> (Your Vote)</>}
          </Progress>
        </CardBody>
      </Card>
    );
  }
}

export default QuestionResult;
