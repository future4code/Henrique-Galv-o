import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family:'SignikaRegular';
`
const CardTracks = styled.div`
background-color: #1DB954;
color:white;
width:400px;
display: flex;
justify-content:space-between;
padding:8px;
border: 1px solid #696969;
border-radius:15px;
margin-top:4px;
font-family:'SignikaRegular';
`
export default class PlaylistsDetails extends React.Component {

    state = {
        tracks: []
    }

    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "henrique-galvao-paiva"
            }
        })
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    render() {
        const tracks = this.props.state.playlists.map((track) => {
            return (
                <CardTracks key={track.id}>
                    {track.name}
                </CardTracks>
          )
        })
        return (
            <Main>
                <h1>Playlist Details</h1>

        
                <button onClick={this.props.irParaHome}>Home</button>
            </Main>
        )
    }
}