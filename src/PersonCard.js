import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
        return <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age :{this.props.age}</p>
            <p>Hair color :{this.props.haircolor}</p>
            </div>;
    }
}
    
export default PersonCard;
