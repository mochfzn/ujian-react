import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux"

import { Login, DataPrajurit, DataBatalyon, Biodata, Batalyon } from "./template"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      personil: [],
      batalyon: [], 
      isUpdate: 0,
      personilForUpdate: {},
      indexSelected: "",
      indexAuth: "",
      role: ""
     }
  }

  save = (data) => {
    let newPersonil = this.state.personil;
    const { nama, tempatLahir, tanggalLahir, alamat, gender, agama, pangkat, username, password } = data;

    if (this.state.isUpdate === 0) {
      if (nama !== "" &&
        tempatLahir !== "" &&
        tanggalLahir !== "" &&
        alamat !== "" &&
        gender !== "" &&
        agama !== "" &&
        pangkat !== "" && 
        username !== "" &&
        password !== "") {
        newPersonil.push({
          nama, tempatLahir, tanggalLahir, alamat, gender, agama, pangkat, username, password
        });

        this.setState({
          personil: newPersonil
        });

        alert(`data ${nama} berhasil disimpan!`);
      } else {
        alert (`masukkan semua data!`);
      }
    } else {
      let index = this.state.index;
      newPersonil[index].nama = nama;
      newPersonil[index].tempatLahir = tempatLahir;
      newPersonil[index].tanggalLahir = tanggalLahir;
      newPersonil[index].alamat = alamat;
      newPersonil[index].gender = gender;
      newPersonil[index].agama = agama;
      newPersonil[index].pangkat = pangkat;
      newPersonil[index].username = username;
      newPersonil[index].password = password;

      this.setState({
        personil: newPersonil,
        isUpdate: 0
      });

      alert(`Perubahan berhasil!`)
    }
  }

  update = (index) => {
    const data = this.state.personil[index];

    this.setState({
      personilForUpdate: data,
      isUpdate: 1,
      index: index
    });
  }

  delete = (index) => {
    const data = this.state.personil[index];

    let newData = this.state.personil.filter(value => {
      return value != data;
    });

    this.setState({
      personil: newData
    });
  }

  reset = () => {
    this.setState({
      personilForUpdate: {}
    })
  }

  simpanBataylon = (data) => {
    const tempBatalyon = this.state.batalyon;
    const { nama, lokasi, perwira } = data;

    if (nama !== "" && lokasi !== "" && perwira !== []) 
    {
      tempBatalyon.push(data);

      this.setState({
        batalyon: tempBatalyon
      });

      alert(`batalyon ${nama} berhasil disimpan!`);
    } 
    else
    {
      alert (`masukkan semua data batalyon!`);
    }
  }

  doLogin = (username, password) => {
    if((username == "admin") && (password == "admin")) {
      this.setState({
        role: "Admin",
        indexAuth: -1
      });

      this.props.changeLogin();
    } else {
      const { personil } = this.state;
      let data = [];
      let index = "";

      data = personil.find(element => {
        return element.username === username
      });

      index = personil.findIndex(value => {
        return value === data;
      })

      if(typeof data !== 'undefined') {
        this.setState({
          role: data.pangkat,
          indexAuth: index
        });

        this.props.changeLogin();
      } else {
        alert("Username atau password salah!");
      }
      console.log(data);
    }
  }

  render() { 
    return ( 
      <Router>
        <Switch>
          <Route path="/login">
            <Login doLogin={this.doLogin} />
          </Route>
          <Route path="/data-prajurit">
            <DataPrajurit save={this.save} update={this.update} delete={this.delete} reset={this.reset} value={this.state.personil} valueUpdate={this.state.personilForUpdate} isUpdate={this.state.isUpdate}  />
          </Route>
          <Route path="/data-batalyon">
            <DataBatalyon batalyon={this.state.batalyon} />
          </Route>
          <Route path="/biodata">
            <Biodata />
          </Route>
          <Route path="/batalyon">
            <Batalyon anggota={this.state.personil} value={this.state.personil} save={this.simpanBataylon}/>
          </Route>
          <Route path="/">
            <Login doLogin={this.doLogin} />
          </Route>
        </Switch>
      </Router>
      
     );
  }
}
 
const mapDispatchToProps = dispatch => ({
  changeLogin: () => dispatch({ type: "LOGIN_SUCCESS" })
});

export default connect(null, mapDispatchToProps)(App);
