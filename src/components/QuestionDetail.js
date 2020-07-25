import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import { connect } from "react-redux";
import { Button, Radio } from "semantic-ui-react";
import { handleSaveQuestionAnswer } from "../actions/questions";
import AnswerQuestion from "./AnswerQuestion";
import QuestionResult from "./QuestionResult";

class QuestionDetail extends Component {
  handleSubmit = (answer) => {
    const { handleSaveQuestionAnswer, question, users, authUser } = this.props;
    const author = users[question.author];

    handleSaveQuestionAnswer(authUser, question.id, answer);
  };

  render() {
    const { question, users, authUser } = this.props;
    const author = users[question.author];
    const user = users[authUser];
    return (
      <div>
        <Card>
          <CardHeader>{author.name} asks:</CardHeader>
          <CardBody>
            <section>
              <div className="row">
                <div className="col-md-3">
                  <img src={author.avatarURL} style={{ width: 100 + "%" }} />
                </div>
                <div className="col-md-9">
                  <CardTitle>Would you rather</CardTitle>
                  {user.answers[question.id] == null ? (
                    <AnswerQuestion
                      question={question}
                      onSubmitClick={this.handleSubmit}
                    />
                  ) : (
                    <QuestionResult question={question} user={user} />
                  )}
                </div>
              </div>
            </section>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state, { match }) => ({
  users: state.users,
  question: state.questions[match.params.questionid],
  authUser: state.authUser,
});

const mapDispatchToProps = (dispatch) => ({
  handleSaveQuestionAnswer: (userId, questionId, answer) =>
    dispatch(handleSaveQuestionAnswer(userId, questionId, answer)),
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
