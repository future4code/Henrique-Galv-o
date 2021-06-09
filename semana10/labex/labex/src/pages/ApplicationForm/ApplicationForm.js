import React from 'react'
import { Form, Main, Buttons, AstronautImg } from './Styled'
import Astronaut from '../../img/Astronaut.png'
import { useHistory } from "react-router-dom";
import { goToTripsPage } from "../../route/coordinator"
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function ApplicationForm() {
    const history = useHistory();
    const pathParams = useParams();

    return (
        <Main>
            <AstronautImg src={Astronaut} alt="astronaut">
            </AstronautImg>
            <Form>
                <h3>Cadastre-se para {pathParams.name}</h3>

                <label>Nome:</label>
                <input
                    placeholder="Digite seu nome."></input>
                <label>Idade:</label>
                <input
                    placeholder='Digite sua idade.'></input>
                <label>Porque você deveria ser selecionado?</label>
                <textarea
                    placeholder='Nos diga porque você deveria ser selecionado.'></textarea>
                <label>Profissão:</label>
                <input
                    placeholder="Digite a sua profissão."></input>
                <label>País:</label>
                <select>
                    <option>Selecione um país</option>
                    <option>Brasil</option>
                    <option>México</option>
                    <option>EUA</option>
                    <option>Alemanha</option>
                    <option>Argentina</option>
                </select>
                <Buttons>
                    <button onClick={() => goToTripsPage(history)}>Voltar</button>
                    <button>Cadastrar</button>
                </Buttons>
            </Form >
        </Main >
    )

}