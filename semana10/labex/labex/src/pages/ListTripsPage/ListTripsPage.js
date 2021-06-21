import React from 'react'
import useRequestData from "../../hooks/useRequestData";
import { Main, Header, Logo, Buttons, TripContainer, Invite } from './Styled'
import LogoHome from '../../img/LogoHome.png'
import { useHistory } from "react-router-dom";
import { goToHomePage, goToAuthenticationPage } from "../../route/coordinator"


export default function ListTripsPage() {
    const [tripsData] = useRequestData("/trips", {})
    const history = useHistory();

    const onClickGoSubscribe = (id, name) => {
        history.push(`/appform/${id}/${name}`);
    };


    return (
        <Main>
            <Header>
                <Logo>
                    <img src={LogoHome} alt='logo'></img>
                </Logo>
                <Buttons>
                    <button onClick={() => goToHomePage(history)}>Home</button>

                    <button onClick={() => goToAuthenticationPage(history)}>Login</button>
                </Buttons>
            </Header>
            {tripsData.trips &&
                tripsData.trips.map((trip) => {
                    return <TripContainer
                        style={{
                            backgroundImage: `url(${trip.planet})`,
                            height: '100vh',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}
                        key={trip.id}>
                        <h1>{trip.name}</h1>
                        <h3>{trip.description}</h3>
                        <p>Partida: {trip.date}</p>
                        <p>Duração: {trip.durationInDays} dias</p>
                        <Invite>
                            <p>VOCÊ ESTÁ PRONTO PARA SUA AVENTURA?</p>
                            <button onClick={() => onClickGoSubscribe(trip.id, trip.name)}>Cadastre-se</button>
                        </Invite>
                    </TripContainer>
                })}

        </Main>
    )
}