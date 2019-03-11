import React, { Component } from 'react';

import './../css/component/ContaminationLevel.css';

import { API_URL } from './constant/ApiConstants';

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

    this.getLoadedView = this.getLoadedView.bind(this);
  }

  componentDidMount() {
    fetch(API_URL + "/api/measurements/3351")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          measurements: result
        });
      }, (error) => {
        this.setState({
          isLoaded: true,
          error: error
        });
      });
  }

  render() {
    const {
      error,
      isLoaded
    } = this.state;

    if (isLoaded) {
      if (error) {
        return <Error />;
      } else {
        return this.getLoadedView();
      }
    }

    return <Loading />;
  }

  getLoadedView() {
    const measurements = this.state.measurements;

    return (
      <div className="ContaminationLevelComponent">
        <div className="container">
          <table className="table table-hover">
            <MeasurementTableHeader />
            <tbody>
              {measurements.map(measurement => (
                <Measurement measurement={measurement} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}