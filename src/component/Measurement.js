import React, { Component } from 'react';

import './../css/component/Measurement.css';

import { getLocaleDateFromString, getLocaleTimeFromString } from './util/DateUtil';

export default class Measurement extends Component {
    render() {
        const measurement = this.props.measurement;

        return (
            <tr key={measurement.id} className="MeasurementComponent">
                <td>{getLocaleDateFromString(measurement.fromDateTime)}</td>
                <td>{getLocaleTimeFromString(measurement.fromDateTime)}</td>
                <td>{measurement.pm1}</td>
                <td>{measurement.pm25}</td>
                <td>{measurement.pm10}</td>
                <td>{measurement.pressure}</td>
                <td>{measurement.humidity}</td>
                <td>{measurement.temperature}</td>
            </tr>
        );
    }
}