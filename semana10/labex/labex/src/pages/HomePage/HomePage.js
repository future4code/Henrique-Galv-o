import React from 'react'
import BackgroundHome from '../../img/BackgroundHome.jpg'
import { Logo, Buttons, ButtonTrip, Main, ButtonRestrict } from './Styled'
import LogoHome from '../../img/LogoHome.png'
import { useHistory } from "react-router-dom";
import { goToTripsPage,  goToAdminPage } from "../../route/coordinator"

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
                    <ButtonTrip onClick={() => goToTripsPage(history)}>
                        <button>Viaje pelo Universo</button>
                    </ButtonTrip>
                    <ButtonRestrict onClick={() => goToAdminPage(history)}>
                        <button>Area Restrita</button>
                    </ButtonRestrict>
                </Buttons>
            </Main>
        </div>
    )
}