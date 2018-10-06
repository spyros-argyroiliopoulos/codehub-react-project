import React, { Component } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import InfoTile from "components/InfoTile";
import ProgramsTable from "components/ProgramsTable";
import { fetchStats, fetchPrograms } from "../api";

class Dashboard extends Component {
  state = {
    stats: null,
    programs: null
  };

  componentDidMount() {
    fetchStats()
      .then(({ data }) => {
        this.setState({ stats: data });
      });

    fetchPrograms()
      .then(({ data }) => {
        this.setState({ programs: data });
      });
  }

  render() {
    const { stats, programs } = this.state;

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
              programs &&
                <ProgramsTable title="Last 5 Programs" data={programs} />
            }
          </Col>
        </Row>
      </>
    );
  }
}

export default Dashboard;
