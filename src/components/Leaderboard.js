import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import { connect } from "react-redux";
class Leaderboard extends Component {
  render() {
    const { leaderBoard } = this.props;
    return (
      <section style={{ marginTop: 15 }}>
        <Card>
          <CardHeader>Leaderboard</CardHeader>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Author</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {leaderBoard.map((user, index) => (
                  <tr>
                    <th scope="row">{++index}</th>
                    <td>
                      {<img src={user.avatarURL} style={{ width: 100 }} />}
                    </td>
                    <td>{user.name}</td>
                    <td>{user.questionCount}</td>
                    <td>{user.answerCount}</td>
                    <td>{user.total}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state;
  const leaderBoard = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    .slice(0, 3);
  return {
    leaderBoard,
  };
};

export default connect(mapStateToProps)(Leaderboard);
