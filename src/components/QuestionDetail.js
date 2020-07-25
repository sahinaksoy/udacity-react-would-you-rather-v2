import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import { connect } from "react-redux";
import { Button, Radio } from "semantic-ui-react";
import { handleSaveQuestionAnswer } from "../actions/questions";

class QuestionDetail extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { handleSaveQuestionAnswer, question, users } = this.props;
    const author = users[question.author];
    const answer = this.state.value;
    handleSaveQuestionAnswer(author.id, question.id, answer);
  };

  render() {
    const { question, users } = this.props;
    const author = users[question.author];

    return (
      <div>
        <Card>
          <CardHeader>{author.name} asks:</CardHeader>
          <CardBody>
            <div className="row">
              <div className="col-md-3">
                <img src={author.avatarURL} style={{ width: 100 + "%" }} />
              </div>
              <div className="col-md-9">
                <CardTitle>Would you rather</CardTitle>
                <CardText>
                  <div>
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
                  </div>
                </CardText>
                <Button
                  primary
                  disabled={!this.state.value}
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state, { match }) => ({
  users: state.users,
  question: state.questions[match.params.questionid],
});

const mapDispatchToProps = (dispatch) => ({
  handleSaveQuestionAnswer: (userId, questionId, answer) =>
    dispatch(handleSaveQuestionAnswer(userId, questionId, answer)),
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);