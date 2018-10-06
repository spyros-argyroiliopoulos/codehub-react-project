import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, FormControl } from "react-bootstrap";

const TitleField = ({ value, onChange }) => (
  <FormGroup>
    <Col className="form-label" sm={2}>
      Title
    </Col>
    <Col sm={10}>
      <FormControl
        value={value}
        onChange={(e) => {onChange('title', e.target.value)}}
        type="text"
        placeholder="Title"
      />
    </Col>
  </FormGroup>
);

TitleField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TitleField;
