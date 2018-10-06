import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Loader from "components/Loader/Loader";
import CourseItem from "components/CourseItem";
import { fetchCourse, fetchInstructors } from "../api";

class Course extends Component {
  state = {
    course: null,
    instructors: null,
    showDeleteModal: false
  };

  async componentDidMount() {
    const { match } = this.props;
    const course = await fetchCourse(match.params.id);
    const instructors = await fetchInstructors(course.instructors);

    this.setState({ course, instructors });
  }

  showDeleteModal = () => {
    this.setState({ showDeleteModal: true });
  }

  hideDeleteModal = () => {
    this.setState({ showDeleteModal: false });
  }

  deleteCourse = () => {
    // console.log('deleteCourse');
  }

  render() {
    const { course, instructors, showDeleteModal } = this.state;

    return (
      <>
        <Modal show={showDeleteModal} onHide={this.hideDeleteModal}>
          <Modal.Header closeButton>
            <Modal.Title>Danger</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Are you sure you want to delete this course?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideDeleteModal}>Cancel</Button>
            <Button bsStyle="primary" onClick={this.deleteCourse}>Delete</Button>
          </Modal.Footer>
        </Modal>

        {
          course
            ? <CourseItem {...course} instructors={instructors} />
            : <Loader />
        }
      </>
    );
  }
}

export default Course;
