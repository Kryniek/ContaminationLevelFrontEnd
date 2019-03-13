import React, {Component} from 'react';

import './../css/component/MeasurementTableHeader.css';

export default class MeasurementTableHeader extends Component {
    render() {
        return (
            <thead className="MeasurementTableHeaderComponent">
                <tr>
                    <th>Data pomiaru</th>
                    <th>Czas pomiaru</th>
                    <th>PM1</th>
                    <th>PM25</th>
                    <th>PM10</th>
                    <th>Ciśnienie</th>
                    <th>Wilgotność</th>
                    <th>Temperatura</th>
                </tr>
            </thead>
        );
    }
}