import React from 'react'
import BackgroundHome from '../../img/BackgroundHome.jpg'
import { Logo, Buttons, ButtonTrip, Main, LoginContainer, Login, SendButton, AlienImage } from './Styled'
import LogoHome from '../../img/LogoHome.png'
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../../route/coordinator"
import Alien from '../../img/Alien.png'
import axios from 'axios';
import { BASE_URL } from "../../constants/urls"
import {useForm} from '../../hooks/useForm'



export default function HomePage() {
    const history = useHistory();

    const {form, onChange} = useForm({email:'', password:''})
  

    const onClickLogin = (event) => {
        event.preventDefault()
        axios
            .post(`${BASE_URL}/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                history.push("/admin")
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }


    return (
        <div style={{
            backgroundImage: `url(${BackgroundHome})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover  '
        }}>
            <Main>
                <Logo>
                    <img src={LogoHome} alt="logo" />
                </Logo>
                <LoginContainer>
                    <Login onSubmit={onClickLogin}>
                        <label>Login:</label>
                        <input
                            name="email"
                            type='email'
                            value={form.email}
                            onChange={onChange}
                            placeholder="E-mail"
                            required />
                        <label>Senha:</label>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={onChange}
                            placeholder="Senha"
                            required />
                        <SendButton>Login</SendButton>
                    </Login>
                </LoginContainer>
                <Buttons>
                    <ButtonTrip>
                        <button onClick={() => goToHomePage(history)}>Voltar</button>
                    </ButtonTrip>
                </Buttons>
                <AlienImage src={Alien} alt="alien" />
            </Main>
        </div>
    )
}