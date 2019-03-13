import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav'

import './../css/component/ContaminationLevel.css';

import {API_URL} from './constant/ApiConstants';

import Loading from './util/component/Loading';
import Error from './util/component/Error';
import Measurement from './Measurement';
import MeasurementTableHeader from './MeasurementTableHeader';

export default class ContaminationLevel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      measurements: []
    };

    this.getLoadedView = this
      .getLoadedView
      .bind(this);
    this.getMeasurements = this
      .getMeasurements
      .bind(this);
  }

  componentDidMount() {
    this.getMeasurements();
  }

  render() {
    const {error, isLoaded} = this.state;

    if (isLoaded) {
      if (error) {
        return <Error/>;
      } else {
        return this.getLoadedView();
      }
    }

    return <Loading/>;
  }

  getLoadedView() {
    const measurements = this.state.measurements;

    return (
      <div className="ContaminationLevelComponent">
        <Container>
          <Nav
            justify
            variant="tabs"
            defaultActiveKey="3351"
            onSelect={eventKey => this.getMeasurements(eventKey)}>
            <Nav.Item>
              <Nav.Link eventKey="3351">Wejherowo ul. Skargi</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="6230">Wejherowo ul. Sobieskiego</Nav.Link>
            </Nav.Item>
          </Nav>
          <Table hover striped bordered>
            <MeasurementTableHeader/>
            <tbody>
              {measurements.map(measurement => (<Measurement measurement={measurement}/>))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }

  getMeasurements(installationId = 3351) {
    this.setState({isLoaded: false});

    fetch(API_URL + "/api/measurements/" + installationId)
      .then(res => res.json())
      .then((result) => {
        this.setState({isLoaded: true, measurements: result});
      }, (error) => {
        this.setState({isLoaded: true, error: error});
      });
  }
}