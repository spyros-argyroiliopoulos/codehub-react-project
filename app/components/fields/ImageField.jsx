import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, FormControl } from "react-bootstrap";

const ImageField = ({ value, onChange }) => (
  <FormGroup>
    <Col className="form-label" sm={2}>
      Image
    </Col>
    <Col sm={10}>
      <FormControl
        value={value}
        onChange={(e) => {onChange("imagePath", e.target.value);}}
        type="text"
        placeholder="Image path"
      />
    </Col>
  </FormGroup>
);

ImageField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ImageField;
