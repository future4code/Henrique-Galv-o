import React from 'react'
import BackgroundHome from '../../img/BackgroundHome.jpg'
import { Logo, Buttons, ButtonTrip, Main, ButtonRestrict, LoginContainer, Login, SendButton, AlienImage } from './Styled'
import LogoHome from '../../img/LogoHome.png'
import { useHistory } from "react-router-dom";
import { goToHomePage, goToTripsPage } from "../../route/coordinator"
import Alien from '../../img/Alien.png'

export default function HomePage() {
    const history = useHistory();
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
                    <label>Login:</label><input></input>
                    <label>Senha:</label><input></input>
                    </Login>
                    <SendButton>Login</SendButton>    
                </LoginContainer>
                <AlienImage src={Alien} alt="alien"/>
            </Main>
        </div>
    )
}