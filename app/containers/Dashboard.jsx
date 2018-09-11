import React, { Component } from "react";
import Hero from "components/Hero";
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
      <div>
        <Hero
          title="Hello, tsevdos."
          subtitle="I hope you are having a great day!"
        />
        <section className="info-tiles">
          <div className="tile is-ancestor has-text-centered">
            {
              stats &&
                stats.map(({ id, ...rest }) => <InfoTile key={id} {...rest} />)
            }
          </div>
        </section>
        { programs && <ProgramsTable title="Last 5 Programs" data={programs} /> }
      </div>
    );
  }
}

export default Dashboard;
