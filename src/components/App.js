import React, {Component} from 'react';
import SensorSearch from "./SensorSearch";
import SensorData from "./SensorData";
import Title from "./Title";

import './styles/styles.css'
import {SENSOR_DATA} from '../events'

import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

class App extends Component {

    state = {
        sensor_data: [],
        filtered_data: [],
        searching: false
    }

    componentDidMount() {
        socket.on(SENSOR_DATA, (data) => {
            this.setState({
                sensor_data: [data, ...this.state.sensor_data]
            })
        });
    }

    searchChange = event => {
        if (event.target.value === "") {
            this.setState({
                searching: false
            })
        }
        else {
            this.setState({
                filtered_data: this.filterSensors(this.state.sensor_data, event.target.value, this.state.sensor_data.length),
                searching: true
            });
        }
    }

    filterSensors(data, searchText, maxResults) {
        return data.filter((data) => {
            return data.sensor.toUpperCase().includes(searchText.toUpperCase());
        }).slice(0, maxResults);
    }

    render() {
        return (
            <div className="container">
                <Title title="Sensor Application"/>
                <SensorSearch search_change={this.searchChange}/>
                {
                    this.state.searching &&
                    <SensorData sensor_data={this.state.filtered_data}/>
                }
                {
                    !this.state.searching &&
                    <SensorData sensor_data={this.state.sensor_data}/>
                }
            </div>
        );
    }
}

export default App;
