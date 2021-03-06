import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";
import AnswerQuestion from "./AnswerQuestion";
import QuestionResult from "./QuestionResult";
import TeaserQuestion from "./TeaserQuestion";
import { Redirect } from "react-router-dom";

class QuestionDetail extends Component {
  handleSubmit = (answer) => {
    const { handleSaveQuestionAnswer, question, users, authUser } = this.props;
    const author = users[question.author];

    handleSaveQuestionAnswer(authUser, question.id, answer);
  };

  render() {
    const {
      question,
      users,
      authUser,
      contentType,
      answered,
      notFound,
    } = this.props;
    if (notFound) {
      return <Redirect to="/notfound" />;
    }
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
                  {contentType == null &&
                    (user.answers[question.id] == null ? (
                      <AnswerQuestion
                        question={question}
                        onSubmitClick={this.handleSubmit}
                      />
                    ) : (
                      <QuestionResult question={question} user={user} />
                    ))}

                  {contentType == "teaser" && (
                    <TeaserQuestion question={question} answered={answered} />
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
const mapStateToProps = (state, { match, questionId }) => {
  if (questionId == null && match != null) {
    questionId = match.params.questionid;
  }
  const question = state.questions[questionId];
  return {
    users: state.users,
    question,
    authUser: state.authUser,
    notFound: question == null,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleSaveQuestionAnswer: (userId, questionId, answer) =>
    dispatch(handleSaveQuestionAnswer(userId, questionId, answer)),
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
