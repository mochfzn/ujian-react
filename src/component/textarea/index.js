import React, { Component } from 'react';

class Textarea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <textarea name={this.props.name} id={this.props.id} value={this.props.value} onChange={this.props.onChange} className={this.props.className}></textarea>
         );
    }
}
 
export default Textarea;