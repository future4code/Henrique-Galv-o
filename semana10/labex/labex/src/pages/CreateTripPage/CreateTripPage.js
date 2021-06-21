import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import { goToAdminPage } from '../../route/coordinator'
import { useForm } from '../../hooks/useForm'
import { Main, Form, Logo } from './Styled'
import LogoHome from '../../img/LogoHome.png'
import BackgroundHome from '../../img/BackgroundHome.jpg'

export default function CreateTripPage() {
    const history = useHistory()

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const sendTrip = (event) => {
        event.preventDefault();

        axios
            .post(`${BASE_URL}/trips`, form, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then(() => {
                alert('Viagem criada com sucesso!')
                cleanFields()
            })
            .catch(() => {
                alert('Algo está errado!')
            })
    }

    return (
        <Main style={{
            backgroundImage: `url(${BackgroundHome})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover  '
        }}>
            <Logo>
                <img src={LogoHome} alt="logo" />
            </Logo>
            <Form onSubmit={sendTrip}>
                <h2>Crie uma viagem!</h2>
                <label>Nome da Viagem:</label>
                <input
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    required
                ></input>
                <label>Data:</label>
                <input
                    placeholder="DD/MM/YYYY"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    required
                ></input>
                <label>Descrição da Viagem:</label>
                <input
                    name='description'
                    value={form.description}
                    onChange={onChange}
                    required
                ></input>
                <label>Duração em dias:</label>
                <input
                    name='durationInDays'
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                ></input>
                <label>URL da Imagem (preferência grande):</label>
                <input
                    name='planet'
                    value={form.planet}
                    onChange={onChange}
                    required
                ></input>
                <button>Criar!</button>
            </Form>
            <button onClick={() => goToAdminPage(history)}>Voltar</button>
        </Main>
    )
}