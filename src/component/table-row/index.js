import React, { Component } from 'react';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <tr key={this.props.kunci}>
                {this.props.children}
            </tr>
         );
    }
}
 
export default TableRow;