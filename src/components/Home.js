import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import QuestionDetail from "./QuestionDetail";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    activeTab: "1",
  };
  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    const { unAnsweredQuestions, answeredQuestions } = this.props;
    return (
      <section style={{ marginTop: 15 }}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Unanswered
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Answered
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ul style={{ listStyleType: "none" }}>
                  {unAnsweredQuestions.map((question) => (
                    <li key={question.id} style={{ marginTop: 10 }}>
                      <QuestionDetail
                        contentType="teaser"
                        questionId={question.id}
                        answered={true}
                      />
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <ul style={{ listStyleType: "none" }}>
                  {answeredQuestions.map((question) => (
                    <li key={question.id} style={{ marginTop: 10 }}>
                      <QuestionDetail
                        contentType="teaser"
                        questionId={question.id}
                        answered={false}
                      />
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { authUser, users, questions } = state;
  const answeredIds = Object.keys(users[authUser].answers);
  const unAnsweredQuestions = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const answeredQuestions = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    unAnsweredQuestions,
    answeredQuestions,
  };
}

export default connect(mapStateToProps)(Home);
