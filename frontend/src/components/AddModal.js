import React, { Component } from 'react';
import 'react-table/react-table.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from "reactstrap";


class AddModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      labTest: this.props.labTest
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    const labTest = { ...this.state.labTest, [name]: value };
    this.setState({ labTest });
  };

  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Laboratoriotutkimus </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="symbol">Tunnus</Label>
              <Input
                type="text"
                name="symbol"
                value={this.state.labTest.symbol}
                onChange={this.handleChange}
                placeholder="Esim. B-Hb"
              />
              <FormGroup/>
              <FormGroup/>
              <Label for="name">Nimi</Label>
              <Input
                  type="text"
                  name="name"
                  value={this.state.labTest.name}
                  onChange={this.handleChange}
                  placeholder="Esim. Hemoglobiini"
              />
              <FormGroup/>
              <FormGroup/>
              <Label for="reference_ranges">Viitearvot</Label>
              <Input
                  type="text"
                  name="reference_ranges"
                  value={this.state.labTest.reference_ranges}
                  onChange={this.handleChange}
                  placeholder="Esim. Miehet: 134–167, naiset: 117–155"
              />
              <FormGroup/>
              <FormGroup/>
              <Label for="unit">Mittayksikkö</Label>
              <Input
                  type="text"
                  name="unit"
                  value={this.state.labTest.unit}
                  onChange={this.handleChange}
                  placeholder="Esim. g/l"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button id="btn2" color="success"
                  /* Save-button can be clicked only when there is no empty field in the form */
                  disabled={!this.state.labTest.name || !this.state.labTest.symbol || !this.state.labTest.reference_ranges || !this.state.labTest.unit}
                  onClick={() => onSave(this.state.labTest)}>
            Tallenna
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default AddModal;