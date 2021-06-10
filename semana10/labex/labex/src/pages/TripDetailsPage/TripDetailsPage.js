import React, { useEffect, useState } from "react"
import { Main, TripDetails, PendingCandidates, ApprovedCandidates, Logo } from './Styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { goToAdminPage } from "../../route/coordinator"
import BackgroundHome from '../../img/BackgroundHome.jpg'
import LogoHome from '../../img/LogoHome.png'


export default function TripDetailPage() {
    const history = useHistory()
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const [approved, setApproved] = useState([])
    const pathParams = useParams();

    useProtectedPage()

    const getTripDetail = (id) => {
        axios.get(`${BASE_URL}/trip/${pathParams.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setTrip(res.data.trip)
                setCandidates(res.data.trip.candidates)
                setApproved(res.data.trip.approved)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    const approveTheCandidate = (id) => {
        const body = { approve: true };

        axios
            .put(`${BASE_URL}/trips/${pathParams.id}/candidates/${id}/decide`, body, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then((resposta) => {
                alert('Candidato foi aprovado!');
                getTripDetail()
            })
            .catch((err) => {
                alert('erro!')
            });
    };

    const rejectTheCandidate = (id) => {
        const body = { approve: false };

        axios
            .put(`${BASE_URL}/trips/${pathParams.id}/candidates/${id}/decide`, body, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then((resposta) => {
                alert('Candidato foi rejeitado!');
                getTripDetail()

            })
            .catch((err) => {
                alert('erro!')
            });
    };


    useEffect(() => {
        getTripDetail();
    }, [])


    return (
        <Main
            style={{
                backgroundImage: `url(${BackgroundHome})`,
                height: '150vh',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover  '
            }}>
            <Logo>
                <img src={LogoHome} alt="logo" />
            </Logo>
            <TripDetails>
                <h1>Detalhes da Viagem</h1>
                <h2>{trip.name ? trip.name : <p>Carregando...</p>}</h2>
                <p>{trip.description ? trip.description : <p>Carregando</p>}</p>
                <p>Data: {trip.date ? trip.date : <p>Carregando</p>}</p>
                <p>Duração: {trip.durationInDays ? trip.durationInDays : <p>Carregando</p>} dias</p>
            </TripDetails>
            <PendingCandidates>
                <h2>Candidatos Pendentes</h2>
                {candidates && candidates.map((candidate) => {
                    return <div key={candidate.id}>
                        <p>Nome: {candidate.name}</p>
                        <p>Profissão: {candidate.profession}</p>
                        <p>Motivo: {candidate.applicationText}</p>
                        <button onClick={() => rejectTheCandidate(candidate.id)}>Rejeitar</button>
                        <button onClick={() => approveTheCandidate(candidate.id)}>Aprovar</button>
                    </div>
                })}

            </PendingCandidates>
            <ApprovedCandidates>
                <h2>Candidatos Aprovados</h2>
                {approved && approved.map((a) => {
                    return <li>{a.name}</li>
                })}
            </ApprovedCandidates>
            <button onClick={() => goToAdminPage(history)}>Voltar</button>

        </Main>
    )

}