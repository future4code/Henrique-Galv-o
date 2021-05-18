import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const Listas = styled.div`
    background-color: black;
    color:white;
    border-radius:15px;
    li{
        list-style:none;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:4px 0 4px 0;
        flex-direction:column;
    }
    button{
        background-color:white;
        color:black;
        margin-top:8px;
    }
`

export default class Lista extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        const header = {
            headers: {
                Authorization: "henrique-galvao-paiva"
            }
        };

        axios
            .get(BASE_URL, header)
            .then((res) => {
                console.log(res.data)
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                alert(err.response)
            });
    };


    delUsers = () => {
        const header = {
            headers: {
                Authorization: "henrique-galvao-paiva"
            }
        };
        axios
        .delete(`${BASE_URL}/:id`, header)
        .then((res)=> {
            console.log(res)
            this.setState({usuarios: res.data})
        })
        .catch((err)=> {
            alert(err.response)
        })
    }


    render() {
        const usuariosComponents = this.state.usuarios.map((user) => {
            return <li key={user.id}>{user.name}<button onClick={this.delUsers}>Deletar</button></li>;
        });
        return (
            <div>
                <h2>Lista de Usuarios</h2>
                <Listas>
                {usuariosComponents}
                </Listas>
            </div>
        )
    }
}