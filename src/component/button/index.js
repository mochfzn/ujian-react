import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <input type="button" name={this.props.name} id={this.props.id} value={this.props.value} onClick={this.props.onClick} className={this.props.className} />
         );
    }
}
 
export default Button;