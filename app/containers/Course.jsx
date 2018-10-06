import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Loader from "components/Loader/Loader";
import CourseItem from "components/CourseItem";
import CourseForm from "components/CourseForm";
import { fetchCourse, fetchInstructors, fetchCourseInstructors, putCourse, deleteCourse as deleteCourseApi } from "../api";

class Course extends Component {
  state = {
    course: null,
    courseInstructors: null,
    instructors: null,
    deleteModalIsShown: false,
    updateModalIsShown: false,
    editFields: {}
  };

  async componentDidMount() {
    const { match } = this.props;
    const course = await fetchCourse(match.params.id);
    const courseInstructors = await fetchCourseInstructors(course.instructors);
    const instructors = await fetchInstructors();
    this.setState({ course, instructors, courseInstructors, editFields: {...course} });
  }

  deleteCourse = async () => {
    const { course } = this.state;
    const { history } = this.props;

    await deleteCourseApi(course.id);
    history.push("/courses");
  }

  handleUpdateModal = () => {
    this.setState((prevState) => ({ updateModalIsShown: !prevState.updateModalIsShown }));
  }

  handleDeleteModal = () => {
    this.setState((prevState) => ({ deleteModalIsShown: !prevState.deleteModalIsShown }));
  }

  updateCourse = async () => {
    const { editFields } = this.state;
    const { history } = this.props;

    await putCourse(editFields);
    history.push("/courses");
  }

  onChangeField = (type, value) => {
    this.setState((prevState) => {
      if (type === 'early_bird' || type === 'normal') {
       return {
          editFields: {
            ...prevState.editFields,
            price:{
              ...prevState.editFields.price,
              [type]: parseInt(value, 10)
            }
          }
        }
      } else if (type === 'start_date' || type === 'end_date') {
       return {
          editFields: {
            ...prevState.editFields,
            dates:{
              ...prevState.editFields.dates,
              [type]: value
            }
          }
        }
      } else if (type === 'instructors') {
       return {
          editFields: {
            ...prevState.editFields,
            [type]: [value]
          }
        }
      }
     return {
        editFields: {
          ...prevState.editFields,
          [type]: value
        }
      }
    });
  }

  render() {
    const { course, instructors, courseInstructors, deleteModalIsShown, updateModalIsShown, editFields} = this.state;

    return (
      <>
        <Modal show={updateModalIsShown} onHide={this.handleUpdateModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CourseForm
              {...editFields}
              allInstructors={instructors}
              onChangeField={this.onChangeField}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleUpdateModal}>Cancel</Button>
            <Button bsStyle="primary" onClick={this.updateCourse}>Update</Button>
          </Modal.Footer>
        </Modal>
        {
          course &&
            <Modal show={deleteModalIsShown} onHide={this.handleDeleteModal}>
              <Modal.Header closeButton>
                <Modal.Title>Delete Course</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Are you sure you want to delete &quot;{ course.title }&quot; course?</h4>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleDeleteModal}>Cancel</Button>
                <Button bsStyle="primary" onClick={this.deleteCourse}>Delete</Button>
              </Modal.Footer>
            </Modal>
        }
        {
          course
            ? <CourseItem
                {...course}
                instructors={courseInstructors}
                handleUpdate={this.handleUpdateModal}
                handleDelete={this.handleDeleteModal}
              />
            : <Loader />
        }
      </>
    );
  }
}

export default withRouter(Course);
