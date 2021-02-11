import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { Label, Text, Date, Radio, Select, Option, TableRow, TableData, Button, Textarea, Password } from '../../component';

class DataPrajurit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama: "",
            tempatLahir: "",
            tanggalLahir: "",
            alamat: "",
            gender: "",
            agama: "",
            pangkat: "",
            username: "",
            password: ""
         }
    }

    setValue = el => {
        let name = el.target.name;
        
        switch(name) {
            case "tempat-lahir":
                name = "tempatLahir";
                break;
            case "tanggal-lahir":
                name = "tanggalLahir";
                break;
            default:
                break;
        }

        this.setState({
            [name]: el.target.value
        })
    }

    render() { 
        if(!this.props.isLogin) {
            return <Redirect to="/login" />
        }

        if("nama" in this.props.valueUpdate) {
            this.setState({
                nama: this.props.valueUpdate.nama,
                tempatLahir: this.props.valueUpdate.tempatLahir,
                tanggalLahir: this.props.valueUpdate.tanggalLahir,
                alamat: this.props.valueUpdate.alamat,
                gender: this.props.valueUpdate.gender,
                pangkat: this.props.valueUpdate.pangkat,
                agama: this.props.valueUpdate.agama,
                username: this.props.valueUpdate.username,
                password: this.props.valueUpdate.password
            });
            this.props.reset();
        }

        const { nama, tempatLahir, tanggalLahir, alamat, gender, agama, pangkat, username, password } = this.state;
        return ( 
            <div className="data-diri">
                <h3>Masukkan Data Anggota</h3>
                <div className="container-form">
                    <div className="form">
                        <div className="field">
                            <Label for="nama" className="label">Nama Lengkap</Label>
                            <Text name="nama" name="nama" id="nama" className="input" value={nama} onChange={this.setValue} />                
                        </div>
                        <div className="field">
                            <Label for="tempat-lahir" className="label">Tempat Tanggal Lahir</Label>
                            <Text name="tempat-lahir" id="tempat-lahir" className="input" value={tempatLahir} onChange={this.setValue} />
                            <Date name="tanggal-lahir" id="tanggal-lahir" className="input" onChange={this.setValue} />                    
                        </div>
                        <div className="field">
                            <Label for="alamat" className="label">Alamat</Label>
                            <Textarea name="alamat" id="alamat" className="textarea" value={alamat} onChange={this.setValue} />                 
                        </div>
                        <div className="field">
                            <Label for="laki" className="label">Jenis Kelamin</Label>
                            <Radio id="laki" name="gender" value="laki" checked={(gender === "laki")?"checked":""} onChange={this.setValue} /><br />
                            <Radio id="perempuan" name="gender" value="perempuan" checked={(gender === "perempuan")?"checked":""} onChange={this.setValue} /><br />
                        </div>
                        <div className="field">
                            <Label for="agama" className="label">Agama:</Label>
                            <Select id="agama" name="agama" className="select" onChange={this.setValue}>
                                <Option value="" >Pilih</Option>
                                <Option value="Islam" selected={(agama === "Islam")?"checked":""}>Islam</Option>
                                <Option value="Kristen" selected={(agama === "Kristen")?"checked":""}>Kristen</Option>
                                <Option value="Katolik" selected={(agama === "Katolik")?"checked":""}>Katolik</Option>
                                <Option value="Hindu" selected={(agama === "Hindu")?"checked":""}>Hindu</Option>
                                <Option value="Budha" selected={(agama === "Budha")?"checked":""}>Budha</Option>
                            </Select>
                        </div>
                        <div className="field">
                            <Label for="pangkat" className="label">Pangkat:</Label>
                            <Select id="pangkat" name="pangkat" className="select" onChange={this.setValue}>
                                <Option value="" >Pilih</Option>
                                <Option value="Kolonel" selected={(pangkat === "Kolonel")?"checked":""}>Kolonel</Option>
                                <Option value="Letnan" selected={(pangkat === "Letnan")?"checked":""}>Letnan</Option>
                                <Option value="Sersan" selected={(pangkat === "Sersan")?"checked":""}>Sersan</Option>
                                <Option value="Kopral" selected={(pangkat === "Kopral")?"checked":""}>Kopral</Option>
                                <Option value="Prajurit" selected={(pangkat === "Prajurit")?"checked":""}>Prajurit</Option>
                            </Select>
                        </div>
                        <div className="field">
                            <Label for="username" className="label">Username</Label>
                            <Text name="username" name="username" id="username" className="input" value={username} onChange={this.setValue} />                
                        </div>
                        <div className="field">
                            <Label for="password" className="label">Password</Label>
                            <Password name="password" name="password" id="password" className="input" value={password} onChange={this.setValue} />                
                        </div>
                        <div className="field">
                            <Button name="submit" id="submit" value={(this.props.isUpdate === 1) ? "Ubah":"Tambah"} className="button" onClick={() => this.props.save({ nama, tempatLahir, tanggalLahir, alamat, gender, agama, pangkat, username, password })} />
                            <Button name="reset" id="reset" value="Ulangi" className="button" />
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
                                this.props.value.map((element, index) => {
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
                                                <Button name="update" value="Ubah" onClick={() => this.props.update(index)}></Button>
                                                <Button name="delete" value="Hapus" onClick={() =>this.props.delete(index)}></Button>
                                            </TableData>
                                        </TableRow>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Link to="/batalyon">
                    <Button name="batalyon" value="Batalyon" />
                </Link>
                <Link to="/data-batalyon">
                    <Button name="data-batalyon" value="Data Batalyon" />
                </Link>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.Auth.statusLogin
    }
}
 
export default connect(mapStateToProps)(DataPrajurit);