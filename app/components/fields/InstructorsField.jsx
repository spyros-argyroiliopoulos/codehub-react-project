import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, FormControl, ControlLabel, Checkbox, Row } from "react-bootstrap";

const InstructorsField = ({ value, allInstructors, onChange }) => (
  <FormGroup>
    <Col sm={12}>
      <ControlLabel>Instructors</ControlLabel>
        <Row>
        {
          allInstructors.map(({id, name}) =>
            <Col key={id} sm={6}>
              <Checkbox
                checked={value.includes(id)}
                onChange={(e) => {
                  const array = [...value];
                  if (e.target.checked) {
                    array.push(id);
                  } else {
                    const index = array.indexOf(id);
                    if (index > -1) {
                      array.splice(index, 1);
                    }
                  }
                  onChange('instructors', array)}
                }
              >
                {`${name.first} ${name.last}`}
              </Checkbox>
            </Col>
          )
        }
      </Row>
    </Col>
  </FormGroup>
);

InstructorsField.propTypes = {
  value: PropTypes.array.isRequired,
  allInstructors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InstructorsField;
