import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { Grid } from "react-bootstrap";
import Dashboard from "./containers/Dashboard";
import Courses from "./containers/Courses";
import Course from "./containers/Course";
import AddCourse from "./containers/AddCourse";
import "./app.css";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Header />
      <Grid>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/:id" component={Course} />
        <Route exact path="/add-course" component={AddCourse} />
      </Grid>
    </>
  </BrowserRouter>,
  document.getElementById("app")
);
