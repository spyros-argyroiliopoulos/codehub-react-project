import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, Checkbox } from "react-bootstrap";

const OpenField = ({ value, onChange }) => (
  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox
        checked={value}
        onChange={(e) => {onChange("open", e.target.checked);}}
      >
        Open
      </Checkbox>
    </Col>
  </FormGroup>
);

OpenField.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default OpenField;
