import React from "react";
import PropTypes from "prop-types";
import TitleField from "./fields/TitleField";
import DurationField from "./fields/DurationField";
import ImageField from "./fields/ImageField";
import OpenField from "./fields/OpenField";
import DescriptionField from "./fields/DescriptionField";
import InstructorsField from "./fields/InstructorsField";
import DatesField from "./fields/DatesField";
import PriceField from "./fields/PriceField";
import {Form} from "react-bootstrap";

const CourseForm = ({ title, duration, imagePath, open, instructors, allInstructors, description,
  dates, price, onChangeField }) => (

  <Form horizontal>
    <TitleField value={title} onChange={onChangeField} />
    <DurationField value={duration} onChange={onChangeField} />
    <ImageField value={imagePath} onChange={onChangeField} />
    <OpenField value={open} onChange={onChangeField} />
    <InstructorsField value={instructors} allInstructors={allInstructors} onChange={onChangeField} />
    <DescriptionField value={description} onChange={onChangeField} />
    <DatesField value={dates} onChange={onChangeField} />
    <PriceField value={price} onChange={onChangeField} />
  </Form>
);

CourseForm.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  instructors: PropTypes.array.isRequired,
  allInstructors: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  dates: PropTypes.shape({
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.shape({
    normal: PropTypes.number.isRequired,
    early_bird: PropTypes.number,
  }).isRequired,
  onChangeField: PropTypes.func.isRequired,
};

export default CourseForm;
