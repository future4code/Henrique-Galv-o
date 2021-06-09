import React, { useEffect } from 'react'
import BackgroundHome from '../../img/BackgroundHome.jpg'
import { Main, Logo, Buttons, TripCard } from './Styled'
import { useHistory } from "react-router-dom";
import { goToCreateTripPage, goToHomePage, goToTripDetailsPage } from '../../route/coordinator'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import LogoHome from '../../img/LogoHome.png'
import useRequestData from '../../hooks/useRequestData'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'

export default function AdminPage() {
    const history = useHistory();
    const [tripsData] = useRequestData("/trips", {})

    useProtectedPage()

    const delTrip = (id, getTrips) =>{
        
        axios
        .delete(`${BASE_URL}/trips/${id}`,{
            headers: {
                auth: localStorage.getItem('token')
                
            }
        })
        .then(()=>{
            alert('Viagem Apagada!')
            history.refresh('/admin')
            
        })
        .catch((err)=>{
            alert(err.response)
        })
    }
    console.log(localStorage.getItem('token'))
  
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
                    <button onClick={() => goToHomePage(history)}>Voltar</button>
                    <button onClick={()=> goToCreateTripPage(history)}>Criar Viagem</button>
                    <button>Logout</button>
                </Buttons>

                {tripsData.trips && tripsData.trips.map((trip) => {
                    return <TripCard key={trip.id}>
                            <h3>{trip.name}</h3>
                            <button onClick={() => goToTripDetailsPage(history, trip.id)}>Go</button>
                            <button onClick={()=>delTrip(trip.id)} key={trip.id}>X</button>
                        </TripCard>
                })
                }
               

                <button >Logout</button>

            </Main>
        </div>
    )
}