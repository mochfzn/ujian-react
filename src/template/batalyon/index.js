import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { Label, Text, Select, Option, TableRow, TableData, Button, Textarea, Password } from '../../component';

class Batalyon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama: "",
            lokasi: "",
            jumlah: "",
            perwira: [],
            detail: {
                nama: "-",
                tempatLahir: "-",
                tanggalLahir: "-",
                alamat: "-",
                gender: "-",
                agama: "-",
                pangkat: "-"
            }
         }
    }

    lihatDetail = el => {
        const nama = el.target.value;

        const {anggota} = this.props;
        let tempDetail = anggota.find(element => {
            return element.nama === nama;
        });

        this.setState({
            detail: tempDetail
        });
    }

    tambahAnggota = () => {
        const anggota = this.state.perwira;

        anggota.push(this.state.detail);

        this.setState({
            perwira: anggota
        })
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() { 
        if(!this.props.isLogin) {
            return <Redirect to="/login" />
        }

        const { nama, lokasi, perwira, detail } = this.state;
        return ( 
            <div className="batalyon">
                <h3>Masukkan Anggota Batalyon</h3>
                <div className="container-form">
                    <div className="form">
                        <div className="field">
                            <Label for="nama" className="label">Nama Batalyon</Label>
                            <Text name="nama" name="nama" id="nama" className="input" onChange={this.setValue} />                
                        </div>
                        <div className="field">
                            <Label for="lokasi" className="label">lokasi</Label>
                            <Textarea name="lokasi" id="lokasi" className="textarea" onChange={this.setValue} />                 
                        </div>
                        <div className="field">
                            <Label for="anggota" className="label">Pilih Anggota:</Label>
                            <Select id="anggota" name="anggota" className="select" onChange={this.lihatDetail}>
                                <Option value="" >Pilih</Option>
                                {
                                    this.props.anggota.map(element => {
                                        return (
                                            <Option value={element.nama}>{element.nama}, {element.pangkat}</Option>
                                        )
                                    })
                                }
                            </Select>
                            <table id="customers" border="1">
                                <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>TTL</th>
                                        <th>Kelamin</th>
                                        <th>Agama</th>
                                        <th>Alamat</th>
                                        <th>Pangkat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow>
                                        <TableData>{detail.nama}</TableData>
                                        <TableData>{detail.tempatLahir}, {detail.tanggalLahir}</TableData>
                                        <TableData>{detail.gender}</TableData>
                                        <TableData>{detail.agama}</TableData>
                                        <TableData>{detail.alamat}</TableData>
                                        <TableData>{detail.pangkat}</TableData>
                                    </TableRow>
                                </tbody>
                            </table>
                        </div>
                        <div className="field">
                            <Button name="tambah" id="tambah" value="Tambah Anggota" className="button" onClick={this.tambahAnggota} />
                        </div>
                    </div>
                </div>
                <div className="data">
                    <div className="search">
                        <Label for="search-text" className="label">Cari :</Label>
                        <Select id="search-option" name="search-option" className="select">
                            <Option value="Nama">Nama</Option>
                            <Option value="Alamat">Alamat</Option>
                        </Select>
                        <Text name="search-text" id="search-text" className="input" onChange={this.setValue} />
                        <Button name="search-button" id="search-button" value="Cari" className="button" />
                    </div>
                    <table id="customers" border="1">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>TTL</th>
                                <th>Kelamin</th>
                                <th>Agama</th>
                                <th>Alamat</th>
                                <th>Pangkat</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.perwira.map((element, index) => {
                                    return (
                                        <TableRow kunci={index}>
                                            <TableData>{index + 1}</TableData>
                                            <TableData>{element.nama}</TableData>
                                            <TableData>{element.tempatLahir}, {element.tanggalLahir}</TableData>
                                            <TableData>{element.gender}</TableData>
                                            <TableData>{element.agama}</TableData>
                                            <TableData>{element.alamat}</TableData>
                                            <TableData>{element.pangkat}</TableData>
                                            <TableData>
                                                <Button name="delete" value="Hapus"></Button>
                                            </TableData>
                                        </TableRow>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Button name="simpan" id="simpan" value="Simpan Batalyon" className="button" onClick={() => this.props.save({nama, lokasi, perwira})} />
                <Link to="/data-prajurit">
                    <Button name="data-prajurit" value="Data Prajurit" />
                </Link>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    //console.log("state redux", state);
    return {
        isLogin: state.Auth.statusLogin
    }
}

export default connect(mapStateToProps)(Batalyon);