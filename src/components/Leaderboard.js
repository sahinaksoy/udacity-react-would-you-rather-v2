import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";

class Leaderboard extends Component {
  render() {
    return (
      <section style={{ marginTop: 15 }}>
        <Card>
          <CardHeader>Leaderboard</CardHeader>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Author</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </section>
    );
  }
}

export default Leaderboard;
