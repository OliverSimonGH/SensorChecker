import React, {Component} from 'react';

class Title extends Component {
    render() {
        return (
            <div className="page-header center">
                <h2>{this.props.title}</h2>
            </div>

        );
    }
}

export default Title;