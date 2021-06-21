import React from 'react'
import { Form, Main, Buttons, AstronautImg } from './Styled'
import Astronaut from '../../img/Astronaut.png'
import { useHistory } from "react-router-dom";
import { goToTripsPage } from "../../route/coordinator"
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { useForm } from '../../hooks/useForm'

export default function ApplicationForm() {
    const history = useHistory();
    const pathParams = useParams();

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const sendCandidate = (event) => {
        event.preventDefault()

        axios
            .post(`${BASE_URL}/trips/${pathParams.id}/apply`, form)
            .then(() => {
                alert('Cadastrado com sucesso!')
                cleanFields()
            })
            .catch(() => {
                alert('Você não pode ser selecionado!')
            })
    }

    return (
        <Main>
            <AstronautImg src={Astronaut} alt="astronaut">
            </AstronautImg>
            <Form onSubmit={sendCandidate}>
                <h3>Cadastre-se para {pathParams.name}</h3>

                <label>Nome:</label>
                <input
                    onChange={onChange}
                    name='name'
                    type='text'
                    placeholder="Digite seu nome."
                    required
                />
                <label>Idade:</label>
                <input
                    onChange={onChange}
                    name='age'
                    min="18"
                    placeholder='Digite sua idade.'
                    required
                />
                <label>Porque você deveria ser selecionado?</label>
                <textarea
                    onChange={onChange}
                    name='applicationText'
                    placeholder='Nos diga porque você deveria ser selecionado.'
                    required
                />
                <label>Profissão:</label>
                <input
                    onChange={onChange}
                    name='profession'
                    placeholder="Digite a sua profissão."
                    required
                />
                <label>País:</label>
                <select
                    onChange={onChange}
                    name='country'
                    required>
                    <option>Selecione um país</option>
                    <option>Brasil</option>
                    <option>México</option>
                    <option>EUA</option>
                    <option>Alemanha</option>
                    <option>Argentina</option>
                    <option>Russia</option>
                    <option>Outro planeta!</option>
                </select>
                <Buttons>
                    <button>Cadastrar</button>
                </Buttons>
            </Form >
            <button onClick={() => goToTripsPage(history)}>Voltar</button>
        </Main >
    )

}