import axios from 'axios';
import React, { Component } from 'react';
import ProfilList from './profil/ProfilList';
const data = require('./general/Data.js')


class Suggestion extends Component {
    constructor(props) {
        super(props);
        this.token = document.cookie.split(";").find(it => it.includes("token=")).split("=")[1]
        this.state = {
            resultat : null
        }
    }
    componentWillMount(){
        axios.get('/api/user').then(res => {
            this.setState({resultat: res.data.slice(0, 5)})
        }).catch(err => {
            this.setState({resultat: data.getUsers().slice(0, 5)})
            alert(err)
        })
    }
    render() {

        return <div id="suggestion_profil">
            {this.token &&
                <ProfilList serveur={this.props.serveur} setPage={this.props.setPage} setBody={this.props.setBody} resultat={this.state.resultat} />
            }
            <div className='buttons' onClick={()=> {
                
                axios.get('/api/user').then(res => {
                    this.setState({resultat: res.data.slice(0, 5)})
                }).catch(err => {
                    this.setState({resultat: data.getUsers().slice(0, 5)})
                    alert(err)
                })
                
                }}>Suggerer</div>
        </div>
    }
}

export default Suggestion