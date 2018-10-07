import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Loader from "components/Loader/Loader";
import CourseItem from "components/CourseItem";
import CourseForm from "components/CourseForm";
import ModalForm from "components/ModalForm";
import {validateForm} from "../common/validation";
import { fetchCourse, fetchInstructors, fetchCourseInstructors, updateCourse, deleteCourse as deleteCourseApi } from "../api";

class Course extends Component {
  state = {
    course: null,
    courseInstructors: null,
    instructors: null,
    deleteModalIsShown: false,
    editModalIsShown: false,
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

  handleEditModal = () => {
    this.setState((prevState) => ({ editModalIsShown: !prevState.editModalIsShown }));
  }

  handleDeleteModal = () => {
    this.setState((prevState) => ({ deleteModalIsShown: !prevState.deleteModalIsShown }));
  }

  updateCourse = async () => {
    const { editFields } = this.state;
    const { history } = this.props;

    await updateCourse(editFields);
    history.push("/courses");
  }

  onChangeField = (type, value) => {
    this.setState((prevState) => ({
      editFields: {
        ...prevState.editFields,
        [type]: value
      }
    }));
  }

  render() {
    const { course, instructors, courseInstructors, deleteModalIsShown, editModalIsShown, editFields} = this.state;

    return (
      <>
        {
          course &&
            <ModalForm
              addModalIsShown={editModalIsShown}
              handleAddModal={this.handleEditModal}
              onAction={this.updateCourse}
              modalTitle="Edit Course"
              buttonTitle="Edit"
              submitIsEnabled={validateForm(editFields)}
            >
              <CourseForm
                {...editFields}
                allInstructors={instructors}
                onChangeField={this.onChangeField}
              />
            </ModalForm>
        }
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
              handleEdit={this.handleEditModal}
              handleDelete={this.handleDeleteModal}
            />
            : <Loader />
        }
      </>
    );
  }
}

export default withRouter(Course);
