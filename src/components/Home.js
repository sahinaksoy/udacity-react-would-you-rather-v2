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
                  <li style={{ marginTop: 10 }}>
                    <QuestionDetail
                      contentType="teaser"
                      questionId="6ni6ok3ym7mf1p33lnez"
                    />
                  </li>
                  <li style={{ marginTop: 10 }}>
                    <QuestionDetail
                      contentType="teaser"
                      questionId="6ni6ok3ym7mf1p33lnez"
                    />
                  </li>
                </ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Answered</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </section>
    );
  }
}

export default Home;
