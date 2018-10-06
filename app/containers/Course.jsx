import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Loader from "components/Loader/Loader";
import CourseItem from "components/CourseItem";
import { fetchCourse, fetchInstructors, deleteCourse as deleteCourseApi } from "../api";

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

  deleteCourse = async () => {
    const { course } = this.state;
    const { history } = this.props;

    await deleteCourseApi(course.id);
    history.push("/courses");
  }

  render() {
    const { course, instructors, showDeleteModal } = this.state;

    return (
      <>
        {
          course &&
            <Modal show={showDeleteModal} onHide={this.hideDeleteModal}>
              <Modal.Header closeButton>
                <Modal.Title>Danger</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Are you sure you want to delete &quot;{ course.title }&quot; course?</h4>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.hideDeleteModal}>Cancel</Button>
                <Button bsStyle="primary" onClick={this.deleteCourse}>Delete</Button>
              </Modal.Footer>
            </Modal>
        }

        {
          course
            ? <CourseItem {...course} handleDelete={this.showDeleteModal} instructors={instructors} />
            : <Loader />
        }
      </>
    );
  }
}

export default withRouter(Course);
