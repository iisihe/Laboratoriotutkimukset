import React, { Component } from 'react';
import 'react-table/react-table.css'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class DeleteModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      labTest: this.props.labTest
    };
  }

  render() {
    const { toggle, onDelete } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Poistetaanko? </ModalHeader>
        <ModalBody>
          {this.state.labTest.name} ({this.state.labTest.symbol}) {this.state.labTest.reference_ranges} {this.state.labTest.unit}
        </ModalBody>
        <ModalFooter>
          <Button color="btn btn-danger" onClick={() => onDelete(this.state.labTest.id)}>
            Poista
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}