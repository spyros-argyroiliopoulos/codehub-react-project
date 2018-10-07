import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, FormControl } from "react-bootstrap";

const DurationField = ({ value, onChange }) => (
  <FormGroup>
    <Col className="form-label" sm={2}>
      Duration
    </Col>
    <Col sm={10}>
      <FormControl
        value={value}
        onChange={(e) => {onChange("duration", e.target.value);}}
        type="text"
        placeholder="Duration"
      />
    </Col>
  </FormGroup>
);

DurationField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DurationField;
