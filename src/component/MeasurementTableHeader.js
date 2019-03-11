import React, { Component } from 'react';

import './../css/component/MeasurementTableHeader.css';

export default class MeasurementTableHeader extends Component {
    render() {
        return (
            <thead className="MeasurementTableHeaderComponent">
                <tr>
                    <th scope="col">Data pomiaru</th>
                    <th scope="col">Czas pomiaru</th>
                    <th scope="col">PM1</th>
                    <th scope="col">PM25</th>
                    <th scope="col">PM10</th>
                    <th scope="col">Ciśnienie</th>
                    <th scope="col">Wilgotność</th>
                    <th scope="col">Temperatura</th>
                </tr>
            </thead>
        );
    }
}