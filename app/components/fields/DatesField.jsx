import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, FormControl, Panel } from "react-bootstrap";

const DatesField = ({ value, onChange }) => (
  <Panel bsStyle="primary">
    <Panel.Heading>Dates</Panel.Heading>
    <Panel.Body>
      <FormGroup>  
        <Col className="form-label" sm={2}>
          Start
        </Col>
        <Col sm={4}>
          <FormControl
            value={value.start_date || ''}
            onChange={(e) => {
              const obj = {...value};
              obj.start_date = e.target.value;
              onChange('dates', obj)}
            }
            type="text"
            placeholder="yyyy-mm-dd"
          />
        </Col>
        <Col className="form-label" sm={2}>
          End
        </Col>
        <Col sm={4}>
          <FormControl
            value={value.end_date || ''}
            onChange={(e) => {
              const obj = {...value};
              obj.end_date = e.target.value;
              onChange('dates', obj)}
            }
            type="text"
            placeholder="yyyy-mm-dd"
          />
        </Col>
      </FormGroup>
    </Panel.Body>
  </Panel>
);

DatesField.propTypes = {
  value: PropTypes.shape({
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

export default DatesField;
