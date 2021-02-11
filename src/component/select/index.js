import React, { Component } from 'react';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <select id={this.props.id} name={this.props.name} onChange={this.props.onChange} className={this.props.className}>
                {this.props.children}
            </select>
         );
    }
}
 
export default Select;