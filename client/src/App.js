import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Grid } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BasicQS, ColorsQS } from "./pages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <Navbar />
              </Grid.Column>
              <Grid.Column width={13}>
                <Switch>
                  <Route path="/quick-sort-basic" component={BasicQS} />
                  <Route path="/quick-sort-colors" component={ColorsQS} />
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
