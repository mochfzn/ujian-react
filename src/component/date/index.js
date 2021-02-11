import React, { Component } from 'react';

class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <input type="date" name={this.props.name} id={this.props.id} value={this.props.value} onChange={this.props.onChange} className={this.props.className} />
         );
    }
}
 
export default Date;