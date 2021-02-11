import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { Label } from "../../component"


class Biodata extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if(!this.props.isLogin) {
            return <Redirect to="/login" />
        }

        return ( 
            <div className="biodata">
                <div className="field">
                    <Label className="judul">Nama Lengkap:</Label>
                    <Label className="isi">Nama</Label>
                </div>
                <div className="field">
                    <Label className="judul">Tempat Tanggal Lahir:</Label>
                    <Label className="isi">Nama</Label>
                </div>
                <div className="field">
                    <Label className="judul">Alamat:</Label>
                    <Label className="isi">Nama</Label>
                </div>
                <div className="field">
                    <Label className="judul">Jenis Kelamin:</Label>
                    <Label className="isi">Nama</Label>
                </div>
                <div className="field">
                    <Label className="judul">Agama:</Label>
                    <Label className="isi">Nama</Label>
                </div>
                <div className="field">
                    <Label className="judul">Pangkat:</Label>
                    <Label className="isi">Nama</Label>
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.Auth.statusLogin
    }
}
 
export default connect(mapStateToProps)(Biodata);