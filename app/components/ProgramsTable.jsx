import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import EventsTableItem from "components/EventsTableItem";

const ProgramsTable = ({ title, data }) => {
  return (
    <div className="card events-card">
      <header className="card-header">
        <p className="card-header-title">{ title }</p>
      </header>
      <div className="card-table">
        <div className="content">
          <table className="table is-fullwidth is-striped">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Bookable</th>
                <th>Price</th>
                <th>Date</th>
                <th className="has-text-right">Details</th>
              </tr>
            </thead>
            <tbody>
              { data.map((program) => <EventsTableItem key={program.id} {...program} />) }
            </tbody>
          </table>
        </div>
      </div>
      <footer className="card-footer">
        <Link to="/programs" className="card-footer-item">View All</Link>
      </footer>
    </div>
  );
};

ProgramsTable.propTypes = {
  title: PropTypes.string.isRequired,
  data:  PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.shape({
      normal: PropTypes.number.isRequired,
      early_bird: PropTypes.number,
    }).isRequired,
    dates: PropTypes.shape({
      start_date: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
    }).isRequired,
    duration: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    instructors: PropTypes.arrayOf(PropTypes.shape({
      full_name: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
    })).isRequired,
    description: PropTypes.string.isRequired
  }))
};

export default ProgramsTable;
