import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const ModalForm = ({ addModalIsShown, handleAddModal, onAction, modalTitle,
  buttonTitle, submitIsEnabled, children }) => (
  <Modal show={addModalIsShown} onHide={handleAddModal}>
    <Modal.Header closeButton>
      <Modal.Title>{modalTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {children}
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={handleAddModal}>Cancel</Button>
      <Button bsStyle="primary" onClick={onAction} disabled={submitIsEnabled}>{buttonTitle}</Button>
    </Modal.Footer>
  </Modal>
);

ModalForm.propTypes = {
  addModalIsShown: PropTypes.bool.isRequired,
  handleAddModal: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  submitIsEnabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default ModalForm;
