import React, { Component } from 'react';
import "./style.css"

class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <label htmlFor={this.props.for} className={this.props.className}>{this.props.children}</label>
         );
    }
}
 
export default Label;