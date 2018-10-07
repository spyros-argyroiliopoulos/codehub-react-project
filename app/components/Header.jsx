import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Navbar, Nav, NavItem } from "react-bootstrap";
import CourseForm from "components/CourseForm";
import ModalForm from "components/ModalForm";
import {validateForm} from "../common/validation";
import { fetchCourses, fetchInstructors, addCourse } from "../api";

const initFields = {
  id: "",
  dates: {
    end_date: "",
    start_date: "",
  },
  description: "",
  duration: "",
  imagePath: "",
  instructors: [],
  open: false,
  price: {
    early_bird: 0,
    normal: 0
  },
  title: "",
};

class Header extends Component {
  state = {
    addModalIsShown: false,
    instructors: [],
    editFields: initFields
  };

  async componentDidMount() {
    const instructors = await fetchInstructors();
    this.setState({ instructors });
  }

  handleAddModal = () => {
    this.setState((prevState) => ({ addModalIsShown: !prevState.addModalIsShown }));
  }

  onChangeField = (type, value) => {
    this.setState((prevState) => ({
      editFields: {
        ...prevState.editFields,
        [type]: value
      }
    }));
  }

  addCourse = async () => {
    const { editFields } = this.state;
    const { history } = this.props;
    const courses = await fetchCourses();
    const maxId = Math.max(...courses.map((course) => parseInt(course.id))) + 1;
    editFields.id = maxId.toString();
    
    this.handleAddModal();
    this.setState({editFields: initFields});
    await addCourse(editFields);
    history.push("/");
  }

  render() {
    const {addModalIsShown, editFields, instructors} = this.state;
    return (
      <>
        {instructors &&
          <ModalForm
            addModalIsShown={addModalIsShown}
            handleAddModal={this.handleAddModal}
            onAction={this.addCourse}
            modalTitle="Add Course"
            buttonTitle="Add"
            submitIsEnabled={validateForm(editFields)}
          >
            <CourseForm
              {...editFields}
              allInstructors={instructors}
              onChangeField={this.onChangeField}
            />
          </ModalForm>
        }
        <Navbar>
          <Row>
            <Col xs={12}>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/" className="navbar-item brand-text">Code.Hub Dashboard</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem
                    componentClass={Link}
                    to="/courses"
                    href="/courses"
                    active={location.pathname === "/courses"}
                  >
                    Courses
                  </NavItem>
                </Nav>
                <Nav pullRight>
                  <NavItem onClick={this.handleAddModal}>Add new course</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Navbar>
      </>
    );
  }
}

export default withRouter(Header);
