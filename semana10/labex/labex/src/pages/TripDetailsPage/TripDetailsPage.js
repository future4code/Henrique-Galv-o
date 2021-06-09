import React, { useEffect, useState } from "react"
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import { useHistory } from "react-router-dom"
import {useProtectedPage} from '../../hooks/useProtectedPage'


export default function TripDetailPage () {
    const [trip, setTrip] = useState({})
   
    useProtectedPage()

    const getTripDetail =(id)=>{
        axios.get(`${BASE_URL}/trip/${id}`,{
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setTrip(res.data.trip)
        })
        .catch((err)=>{
            console.log(err.response.data.message)
        })
    }

    useEffect(()=>{
        getTripDetail();
    },[])


    return (
        <div>
        <h1>trip details</h1>
        {trip.name ? trip.name : <p>Carregando...</p>}
        </div>
        )
    
}