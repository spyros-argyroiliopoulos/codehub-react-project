import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./containers/Dashboard";
import Programs from "./containers/Programs";
import Students from "./containers/Students";
import "./app.css";

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/programs" component={Programs} />
            <Route exact path="/students" component={Students} />
          </div>
        </div>
      </div>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("app")
);
