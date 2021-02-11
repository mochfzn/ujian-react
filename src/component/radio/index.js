import React, { Component } from 'react';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <input type="radio" id={this.props.id} name={this.props.name} value={this.props.value} checked={this.props.checked} onChange={this.props.onChange} />
                <label htmlFor={this.props.id}>{this.props.value}</label><br />
            </React.Fragment>
         );
    }
}
 
export default Radio;