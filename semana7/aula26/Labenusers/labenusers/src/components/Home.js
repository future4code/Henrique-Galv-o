import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Inputs = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`

export default class Home extends React.Component {
    state = {
        inputName: '',
        inputEmail: ''
    }

    handleName = (e) => {
        this.setState({ inputName: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ inputEmail: e.target.value })
    }

    handleClickEnter = (e) => {
        if (e.onKeyCode === 13) {
            this.createUser();
        }
    }

    createUser = () => {
        const header = {
            headers: {
                Authorization: "henrique-galvao-paiva"
            }
        };

        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        };

        axios
            .post(BASE_URL, body, header)
            .then(() => {
                alert("Usuário adicionado com sucesso");
                this.setState({ inputName: "" });
                this.setState({ inputEmail: "" });
                this.getUsers();
            })
            .catch((err) => {
                alert('Usuário ja cadastrado, escolha um nome diferente');
            });
    };

    

    render() {
        return (
            <Container>
                <h2>Criar Usuário</h2>
                <Inputs>
                    <input   
                        placeholder="Nome"
                        value={this.state.inputName}
                        onChange={this.handleName}
                    />
                    <input
                        onKeyDown={this.handleClickEnter}
                        placeholder="E-mail"
                        value={this.state.inputEmail}
                        onChange={this.handleEmail}

                    />
                    <button onClick={this.createUser}>Criar</button>
                </Inputs>
            </Container>
        )
    }
}