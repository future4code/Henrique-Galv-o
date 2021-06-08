import React from 'react'
import useRequestData from "../../hooks/useRequestData";
import { Main, Header, Logo, Buttons, TripContainer, Invite } from './Styled'
import LogoHome from '../../img/LogoHome.png'
import { useHistory } from "react-router-dom";
import {  goToHomePage } from "../../route/coordinator"
import Netuno from '../../img/Netuno.jpg'



export default function ListTripsPage() {
    const history = useHistory();
    
    const onClickGoSubscribe = (id, name) => {
        history.push(`/appform/${id}/${name}`);
      };
    const travel = useRequestData(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-galvao-paiva/trips",
        []
    )


    return (
        <Main>
            <Header>
                <Logo>
                    <img src={LogoHome} alt='logo'></img>
                </Logo>
                <Buttons>
                        <button onClick={()=>goToHomePage(history)}>Home</button>   

                        <button>Login</button>
                </Buttons>
            </Header>
            {travel.trips &&
                travel.trips.map((trip) => {
                    return <TripContainer
                        style={{
                            backgroundImage: `url(${Netuno})`,
                            height: '100vh',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover  '
                        }}
                        key={trip.id}>
                        <h1>{trip.name}</h1>
                        <h3>{trip.description}</h3>
                        <p>Partida: {trip.date}</p>
                        <p>Duração: {trip.durationInDays} dias</p>
                        <Invite>
                            <p>VOCÊ ESTÁ PRONTO PARA SUA AVENTURA?</p>
                            <button onClick={()=>onClickGoSubscribe(trip.id, trip.name)}>Cadastre-se</button>
                        </Invite>
                    </TripContainer>
                })}

        </Main>
    )
}