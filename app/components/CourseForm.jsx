import React from "react";
import { Form, Col, FormGroup, FormControl, Panel, Checkbox, ControlLabel } from "react-bootstrap";

const CourseForm = ({ id, title, imagePath, price, dates, duration, open,
  description, instructors, allInstructors, onChangeField }) => (
  <Form horizontal>
    <FormGroup>
      <Col className="form-label" sm={2}>
        Title
      </Col>
      <Col sm={10}>
        <FormControl
          value={title}
          onChange={(e) => {onChangeField('title', e.target.value)}}
          type="text"
          placeholder="Title"
        />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col className="form-label" sm={2}>
        Duration
      </Col>
      <Col sm={10}>
        <FormControl
          value={duration}
          onChange={(e) => {onChangeField('duration', e.target.value)}}
          type="text"
          placeholder="Duration"
        />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox
          checked={open}
          onChange={(e) => {onChangeField('open', e.target.checked)}}
        >
          Open
        </Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col sm={12}>
        <ControlLabel>Instructors</ControlLabel>
        <FormControl
          value={instructors}
          onChange={(e) => {onChangeField('instructors', e.target.value)}}
          componentClass="select"
          placeholder="select"
          multiple
        >
          {
            allInstructors.map(({id, name}) =>
              <option key={id} value={id}>{`${name.first} ${name.last}`}</option>
            )
          }
        </FormControl>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col className="form-label" sm={12}>
        Description
      </Col>
      <Col sm={12}>
        <textarea
          className="textarea-form"
          value={description}
          onChange={(e) => {onChangeField('description', e.target.value)}}
          placeholder="Description"
        />
      </Col>
    </FormGroup>

    <Panel bsStyle="primary">
      <Panel.Heading>Dates</Panel.Heading>
      <Panel.Body>
        <FormGroup>  
          <Col className="form-label" sm={2}>
            Start
          </Col>
          <Col sm={4}>
            <FormControl
              value={dates.start_date || ''}
              onChange={(e) => {onChangeField('start_date', e.target.value)}}
              type="text"
              placeholder="Start date"
            />
          </Col>
          <Col className="form-label" sm={2}>
            End
          </Col>
          <Col sm={4}>
            <FormControl
              value={dates.end_date || ''}
              onChange={(e) => {onChangeField('end_date', e.target.value)}}
              type="text"
              placeholder="End date"
            />
          </Col>
        </FormGroup></Panel.Body>
      </Panel>

    <Panel bsStyle="primary">
      <Panel.Heading>Price</Panel.Heading>
      <Panel.Body>
        <FormGroup>  
          <Col className="form-label" sm={3}>
            Early Bird
          </Col>
          <Col sm={3}>
            <FormControl
              value={price.early_bird || ''}
              onChange={(e) => {onChangeField('early_bird', e.target.value)}}
              type="number"
              placeholder="Early Bird"
            />
          </Col>
          <Col className="form-label" sm={3}>
            Normal
          </Col>
          <Col sm={3}>
            <FormControl
              value={price.normal || ''}
              onChange={(e) => {onChangeField('normal', e.target.value)}}
              type="number"
              placeholder="Normal"
            />
          </Col>
        </FormGroup></Panel.Body>
      </Panel>
  </Form>
);

export default CourseForm;
