import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Panel, Table } from "react-bootstrap";
import EventsTableItem from "components/EventsTableItem";

const ProgramsTable = ({ title, data }) => {
  return (
    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3">{ title }</Panel.Title>
      </Panel.Heading>
      <Panel.Body className="no-padding">
        <Table responsive striped bordered condensed hover className="no-margin">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Bookable</th>
              <th>Price</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { data.map((program) => <EventsTableItem key={program.id} {...program} />) }
          </tbody>
        </Table>
        <Panel.Footer className="clearfix">
          <Link to="/programs" className="btn btn-primary pull-right">View All</Link>
        </Panel.Footer>
      </Panel.Body>
    </Panel>
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
