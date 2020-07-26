import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import QuestionDetail from "./QuestionDetail";
import NewQuestion from "./NewQuestion";

class App extends Component {
  componentDidMount() {
    const { handleInitialData } = this.props;
    handleInitialData();
  }
  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <div
          className="container"
          style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}
        >
          {authUser == null ? (
            <Login />
          ) : (
            <React.Fragment>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/newpool" component={NewQuestion} />
                <Route
                  path="/question/:questionid"
                  component={QuestionDetail}
                />
              </Switch>
            </React.Fragment>
          )}
        </div>{" "}
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

const mapDispatchToProps = (dispatch) => ({
  handleInitialData: () => dispatch(handleInitialData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
