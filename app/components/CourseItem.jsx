import React from "react";
import PropTypes from "prop-types";
import { PageHeader, Row, Col, Button } from "react-bootstrap";
import Instructor from "./Instructor";

const CourseItem = ({
  id, title, imagePath, price, dates, duration, open, description, instructors, handleUpdate, handleDelete
}) => {

  const { normal } = price;
  const { start_date: startDate, end_date: endDate } = dates;
  const startDateFormatted = new Date(startDate).toLocaleDateString("el-gr");
  const endDateFormatted = new Date(endDate).toLocaleDateString("el-gr");
  const bgImage = {
    height: "250px",
    background: `url(${imagePath}) no-repeat top left`,
    backgroundSize: "cover"
  };

  return (
    <div>
      <PageHeader>{title} <small>({id})</small></PageHeader>
      <div style={bgImage}></div>
      <Row>
        <Col xs={3}>
          <h3>Price: { normal } €</h3>
          <h3>Bookable: { open ? "✔" : "✖" }</h3>
        </Col>
        <Col xs={9}>
          <h3 className="text-right">Duration: { duration }</h3>
          <h3 className="text-right">Dates: { startDateFormatted } - { endDateFormatted }</h3>
        </Col>
      </Row>
      <p className="lead m-top" dangerouslySetInnerHTML={{ __html: description }} />
      <div className="clearfix">
        <Button bsStyle="primary" bsSize="large" onClick={handleUpdate}>Edit</Button>&nbsp;
        <Button bsStyle="danger" bsSize="large" onClick={handleDelete}>Delete</Button>&nbsp;
      </div>
      <h2>Instructors</h2>
      {
        instructors && instructors.map((instructor) =>
          <Instructor key={instructor.id} {...instructor} />)
      }
    </div>
  );
};

CourseItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
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
  description: PropTypes.string.isRequired,
  instructors: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default CourseItem;
