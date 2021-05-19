import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

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

const Main = styled.div`
    background-color:white;
    margin-top:8px;
    padding: 8px;
    border:1px solid black;
    border-radius:15px;
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
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', header)
            .then((res) => {
                console.log(res.data)
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                alert(err)
            });
    };


    delUsers = (id) => {
        const header = {
            headers: {
                Authorization: "henrique-galvao-paiva"
            }
        };
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, header)
        .then((res)=> {
            this.getUsers()
            console.log(res)
        })
        .catch((err)=> {
            alert(err)
        })
    }


    render() {
        const usuariosComponents = this.state.usuarios.map((user) => {
            return <li key={user.id}>{user.name}<button onClick={() => this.delUsers(user.id)}>Deletar</button></li>;
        });
        return (
            <Main>
                <h2>Lista de Usuarios</h2>
                <Listas>
                {usuariosComponents}
                </Listas>
            </Main>
        )
    }
}