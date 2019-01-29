import React from 'react';
import './App.css';
import AddModal from './components/AddModal'
import DeleteModal from './components/DeleteModal'
import axios from "axios";
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labTest: {
        symbol: "",
        name: "",
        reference_ranges: "",
        unit: ""
      },
      labTests: [],
      confirmDelete: false,
      // Columns for table of laboratorytests
      columns: [
        {
          Header: 'Tunnus',
          accessor: 'symbol',
          // Search by symbol
          Filter: ({filter, onChange}) => (
              <input
                  onChange={event => onChange(event.target.value)}
                  value={filter ? filter.value : ''}
                  placeholder={"Hae tunnuksella"}
                  style={{
                    width: '70%',
                    backgroundColor: '#e6e6e6',
                    color: '#404040',
                    textAlign: 'center',
                  }}
              />
          )
        },
        {
          Header: 'Nimi',
          accessor: 'name',
          // Search by name
          Filter: ({filter, onChange}) => (
              <input
                  onChange={event => onChange(event.target.value)}
                  value={filter ? filter.value : ''}
                  placeholder={"Hae nimellä"}
                  style={{
                    width: '70%',
                    backgroundColor: '#e6e6e6',
                    color: '#404040',
                    textAlign: 'center',
                  }}
              />
          )
        },
        {
          Header: 'Viitearvot',
          accessor: 'reference_ranges',
          // Long text continues to the next row
          style: { 'whiteSpace': 'unset' },
          // No search allowed
          filterable: false
        },
        {
          Header: 'Mittayksikkö',
          accessor: 'unit',
          filterable: false
        },
        {
          Header: '',
          // Edit- and delete-button on each row of column
          Cell: row => (
              <div>
                <button className="btn btn-outline-secondary" onClick={() => this.editLabTest(row.original)}>Muokkaa</button>
                <button className="btn btn-outline-danger" onClick={() => this.deleteLabTest(row.original)}>Poista</button>
              </div>
          ),
          filterable: false
        }
      ]
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  // Set AddModal visible/invisible
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  // Set DeleteModal visible/invisible
  toggleDelete = () => {
    this.setState({ confirmDelete: !this.state.confirmDelete });
  };

  // Save laboratorytest (edit and create new one)
  handleSubmit = lab => {
    this.toggle();
    if (lab.id) {
      axios
          .put(`http://localhost:8000/lab/api/labtests/${lab.id}/`, lab)
          .then(res => this.refreshList());
      return;
    }
    axios
        .post("http://localhost:8000/lab/api/labtests/", lab)
        .then(res => this.refreshList());
  };

  // Delete laboratorytest
  handleDelete = lab => {
    axios
        .delete(`http://localhost:8000/lab/api/labtests/${lab}`)
        .then(res => this.refreshList());
    this.setState( { confirmDelete: !this.state.confirmDelete })
  };

  // Refresh the list of laboratorytests
  refreshList = () => {
    axios
        .get("http://localhost:8000/lab/api/labtests/")
        .then(l => this.setState({labTests: l.data}))
        .catch(err => console.log(err));
  };

  addLabTest = () => {
    const lab = { symbol: "", name: "", reference_ranges: "", unit: "" };
    this.setState({ labTest: lab, modal: !this.state.modal });
  };

  editLabTest = lab => {
    this.setState({ labTest: lab, modal: !this.state.modal });
  };

  deleteLabTest = lab => {
    this.setState({ labTest: lab, confirmDelete: !this.state.confirmDelete });
  };

  render() {

    return (
        <div className="App">
          <nav className="navbar sticky-top">
            <div className="navbar-brand">Laboratoriotutkimukset</div>
            <button id="btn1" onClick={this.addLabTest} className="btn btn-success navbtn">
              Lisää tutkimus
            </button>
          </nav>

          <ReactTable
              data={this.state.labTests.map(lab => lab)}
              columns={this.state.columns}
              filterable
              defaultPageSize={10}
              previousText='Edellinen'
              nextText='Seuraava'
              loadingText='Ladataan...'
              noDataText='Ei laboratoriotutkimuksia'
              pageText='Sivu'
              ofText='/'
              rowsText='Riviä'
          />

          {this.state.confirmDelete ? (
              <DeleteModal
                  labTest={this.state.labTest}
                  toggle={this.toggleDelete}
                  onDelete={this.handleDelete}
              />
          ) : null}

          {this.state.modal ? (
              <AddModal
                  labTest={this.state.labTest}
                  toggle={this.toggle}
                  onSave={this.handleSubmit}
              />
          ) : null}
        </div>
    );
  }
}
