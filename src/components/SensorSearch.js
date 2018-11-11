import React, {Component} from 'react';
import './styles/styles.css';

class SensorSearch extends Component {

    handleChange = (event) => {
        this.props.search_change(event);
    };

    render() {
        return (
            <div className="mb15">
                <input onChange={this.handleChange} className="form-control" type="text" placeholder="Search Sensors" aria-label="Search Sensors" />
            </div>
        );
    }
}

export default SensorSearch;