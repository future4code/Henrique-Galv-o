import React, { useEffect } from 'react'
import BackgroundHome from '../../img/BackgroundHome.jpg'
import { Main, Logo, Buttons, TripCard, ButtonsTrip } from './Styled'
import { useHistory } from "react-router-dom";
import { goToAuthenticationPage, goToCreateTripPage, goToHomePage } from '../../route/coordinator'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import LogoHome from '../../img/LogoHome.png'
import useRequestData from '../../hooks/useRequestData'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'

export default function AdminPage() {
    const history = useHistory();
    const [tripsData, getTrips] = useRequestData("/trips", {})

    useProtectedPage()

    const getDetails = (id, name) =>{
        history.push(`/admin/${id}/${name}`)
    }

    const delTrip = (id, getTrips) =>{
        
        axios
        .delete(`${BASE_URL}/trips/${id}`,{
            headers: {
                auth: localStorage.getItem('token')
                
            }
        })
        .then(()=>{
            alert('Viagem Apagada!')   

        })
        .catch((err)=>{
            alert(err.response)
        })
    }
    
    useEffect(()=>{
        getTrips()
    })

    const logout = (history) =>{
        localStorage.removeItem('token')
        goToAuthenticationPage(history)
    }
  
    return (
        <div style={{
            backgroundImage: `url(${BackgroundHome})`,
            height:'150vh',
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
                    <button onClick={()=> logout(history)}>Logout</button>
                </Buttons>

                {tripsData.trips && tripsData.trips.map((trip) => {
                    return <TripCard key={trip.id}>
                            <h3 onClick={() => getDetails(trip.id, trip.name)}>{trip.name}</h3>
                            <ButtonsTrip>
                            <button onClick={()=>delTrip(trip.id)} key={trip.id}>X</button>
                            </ButtonsTrip>
                        </TripCard>
                })
                }

            </Main>
        </div>
    )
}