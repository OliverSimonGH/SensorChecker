import React, {Component} from 'react';
import SensorSearch from './SensorSearch'
import SensorData from './SensorData'
import Title from "./Title";

class Layout extends Component {

    render() {
        return (
            <div className="container1">
                <Title title="Sensor Application"/>
                <SensorSearch />
                <SensorData />
            </div>
        );
    }
}

export default Layout;