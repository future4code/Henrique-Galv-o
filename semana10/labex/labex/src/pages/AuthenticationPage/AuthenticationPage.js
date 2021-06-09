import React from 'react'
import BackgroundHome from '../../img/BackgroundHome.jpg'
import { Logo, Buttons, ButtonTrip, Main, LoginContainer, Login, SendButton, AlienImage } from './Styled'
import LogoHome from '../../img/LogoHome.png'
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../../route/coordinator"
import Alien from '../../img/Alien.png'
import useInput from '../../hooks/useInput'
import axios from 'axios';
import {BASE_URL} from "../../constants/urls"

export default function HomePage() {
    const history = useHistory();

    const [email, handleEmail] = useInput("")
    const [password, handlePassword] = useInput("")

    const onClickLogin = () => {
        const body ={
            'email': email,
            'password': password
        }
        // const body = { email, password }
        axios
        .post(`${BASE_URL}/login`, body)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            history.push("/admin")
        })
        .catch((err)=>{
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
                <Buttons>
                    <ButtonTrip>
                        <button onClick={() => goToHomePage(history)}>Voltar</button>
                    </ButtonTrip>
                </Buttons>
                <LoginContainer>
                    <Login>
                    <label>Login:</label>
                    <input value={email} onChange={handleEmail} placeholder="E-mail"></input>
                    <label>Senha:</label>
                    <input type="password" value={password} onChange={handlePassword} placeholder="Senha"></input>
                    </Login>
                    <SendButton onClick={onClickLogin}>Login</SendButton>    
                </LoginContainer>
                <AlienImage src={Alien} alt="alien"/>
            </Main>
        </div>
    )
}