import React, {Component} from 'react';

class SensorRow extends Component {

    TYPES = {
        NOISE: "noise",
        LIGHT: "light",
        AIR_QUALITY: "air quality"
    }

    getType(type, condition) {
        switch (type) {
            case this.TYPES.NOISE:
                if (condition <= 40)
                    return "table-green";
                else
                    return "table-red";

            case this.TYPES.LIGHT:
                if (condition >= 500 && condition <= 1000)
                    return "table-green";
                else
                    return "table-red";

            case this.TYPES.AIR_QUALITY:
                if (condition <= 8)
                    return "table-green";
                else
                    return "table-red";

            default:
                return "";
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.index} </td>
                <td>{this.props.sensor_name}</td>
                <td>{this.props.sensor_street}</td>
                <td className={this.getType(this.props.sensor_name, this.props.sensor_value)}>{this.props.sensor_value}</td>
            </tr>
        );
    }
}

export default SensorRow;