import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup } from "react-bootstrap";

const DescriptionField = ({ value, onChange }) => (
  <FormGroup>
    <Col className="form-label" sm={12}>
      Description
    </Col>
    <Col sm={12}>
      <textarea
        className="textarea-form"
        value={value}
        onChange={(e) => {onChange("description", e.target.value);}}
        placeholder="Description"
      />
    </Col>
  </FormGroup>
);

DescriptionField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DescriptionField;
