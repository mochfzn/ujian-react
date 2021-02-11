import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { TableRow, TableData } from '../../component';


class DataBatalyon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if(!this.props.isLogin) {
            return <Redirect to="/login" />
        }

        return ( 
            <div className="data-batalyon">
                <table id="customers" border="1">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Lokasi</th>
                            <th>Anggota Batalyon</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.batalyon.map((element, index) => {
                                return (
                                    <TableRow kunci={index}>
                                        <TableData>{index + 1}</TableData>
                                        <TableData>{element.nama}</TableData>
                                        <TableData>{element.lokasi}</TableData>
                                        <TableData>
                                            <ul>
                                                {
                                                    element.perwira.map(element => {
                                                        return (
                                                            <li>{element.nama}, {element.pangkat}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </TableData>
                                    </TableRow>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return {
        isLogin: state.Auth.statusLogin
    }
}

export default connect(mapStateToProps)(DataBatalyon);