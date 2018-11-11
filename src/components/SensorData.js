import React, {Component} from 'react';
import './styles/styles.css'
import SensorRow from "./SensorRow";

class SensorData extends Component {

    render() {
        return (
            <table className="table table-hover table-dark">
                <thead>
                <tr>
                    <th scope="col" colSpan="4">Sensor Data</th>
                </tr>
                <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Condition</th>
                    <th scope="col">Street</th>
                    <th scope="col">Value</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.sensor_data && this.props.sensor_data.length === 0 &&
                    <tr>
                        <td colSpan="4">No data available</td>
                    </tr>
                }
                {
                    this.props.sensor_data.length > 0 && this.props.sensor_data.map((data, key) => {
                        return (
                            <SensorRow key={key} index={key + 1} sensor_name={data.sensor} sensor_street={data.street}
                                       sensor_value={data.value}/>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default SensorData;