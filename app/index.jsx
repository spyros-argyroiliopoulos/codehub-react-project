import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { Grid, Row, Col } from "react-bootstrap";
import Dashboard from "./containers/Dashboard";
import Programs from "./containers/Programs";
import Students from "./containers/Students";
import "./app.css";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Header />
      <Grid>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/programs" component={Programs} />
        <Route exact path="/students" component={Students} />
      </Grid>
    </>
  </BrowserRouter>,
  document.getElementById("app")
);
