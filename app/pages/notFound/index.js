
import React from 'react';

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <div >
                <h1>Not Found Page</h1>
                <p>Ops... page not found here {this.props.match.location}</p>
            </div>
        );
    }
} 