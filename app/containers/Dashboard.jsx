import React, { Component } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import InfoTile from "components/InfoTile";
import CoursesTable from "components/CoursesTable";
import { fetchStats, fetchCourses } from "../api";

class Dashboard extends Component {
  state = {
    stats: null,
    courses: null
  };

  async componentDidMount() {
    const stats = await fetchStats();
    const courses = await fetchCourses();

    this.setState({ stats, courses });
  }

  render() {
    const { stats, courses } = this.state;

    return (
      <>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h2>Welcome to Code.Hub Dashboard!</h2>
              <p>Manage everything and have fun!</p>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          {
            stats &&
              stats.map(({ id, ...rest }) =>
                <Col xs={3} key={id}>
                  <InfoTile {...rest} />
                </Col>
              )
          }
        </Row>

        <Row>
          <Col xs={12}>
            {
              courses &&
                <CoursesTable title="Last 5 Courses" data={courses} />
            }
          </Col>
        </Row>
      </>
    );
  }
}

export default Dashboard;
