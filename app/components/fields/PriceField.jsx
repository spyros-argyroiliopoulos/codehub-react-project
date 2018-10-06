import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, FormControl, Panel } from "react-bootstrap";

const PriceField = ({ value, onChange }) => (
  <Panel bsStyle="primary">
    <Panel.Heading>Price</Panel.Heading>
    <Panel.Body>
      <FormGroup>  
        <Col className="form-label" sm={3}>
          Early Bird
        </Col>
        <Col sm={3}>
          <FormControl
            value={value.early_bird || ''}
            onChange={(e) => {
              const obj = {...value};
              obj.early_bird = parseInt(e.target.value, 10);
              onChange('price', obj)}
            }
            type="number"
            placeholder="Early Bird"
          />
        </Col>
        <Col className="form-label" sm={3}>
          Normal
        </Col>
        <Col sm={3}>
          <FormControl
            value={value.normal || ''}
            onChange={(e) => {
              const obj = {...value};
              obj.normal = parseInt(e.target.value, 10);
              onChange('price', obj)}
            }
            type="number"
            placeholder="Normal"
          />
        </Col>
      </FormGroup></Panel.Body>
    </Panel>
);

PriceField.propTypes = {
  value: PropTypes.shape({
    normal: PropTypes.number.isRequired,
    early_bird: PropTypes.number,
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

export default PriceField;
