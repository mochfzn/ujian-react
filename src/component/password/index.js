import React, { Component } from 'react';

class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <input type="password" name={this.props.name} id={this.props.id} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} className={this.props.className} />
         );
    }
}
 
export default Password;