import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import PlaylistsDetails from './PlaylistDetails';

const Main = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:120vh;
    background-color:black;
    font-family:'SignikaRegular';
`
const Botao = styled.button`
    font-family:'SignikaRegular';
    width:100px;
    outline:none;
    color:white;
    background-color:#1DB954;
    border:none;
    border-radius:15px;
    margin-right:4px;
    margin:16px;
    font-family:'SignikaRegular';
    
:hover{
    opacity:80%;
}   
:active{
     opacity:200%;
    }
`

const CardPlaylists = styled.div`
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

const CardTracks = styled.div`
    background-color: #1DB954;
    display:flex;
    flex-direction:column;
    padding:8px;
    color:white;
    width:500px;
    margin-top:10px;
    border-radius:15px;
    font-family:'SignikaRegular';
    audio{
        
        width:100%;
        height: 25px;
    }
`
const Info = styled.div`
    display:flex;
    justify-content:space-between;
`

const Buttons = styled.div`

    button{
    outline:none;
    background-color:black;
    border:none;
    color:#1DB954;
    border-radius:15px;
    margin-right:4px;
    font-family:'SignikaRegular';
    
}
    button:hover{
    opacity:80%;
}   
    button:active{
     opacity:200%;
    }
`


export default class Playlists extends React.Component {

    state = {
        playlists: [],
        tracks: [
            {
                name: "",
                artist: "",
                url: ""
            }
        ]
    }

    componentDidMount() {
        this.getPlaylists()
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value })
    }
    onChangeArtist = (e) => {
        this.setState({ artist: e.target.value })
    }
    onChangeUrl = (e) => {
        this.setState({ url: e.target.value })
    }

    getPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "henrique-galvao-paiva"
            }
        })
            .then((res) => {
                // console.log(res.data.result.list)
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    delPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "henrique-galvao-paiva"
            }
        })
            .then((res) => {
                alert('Playlist removida com sucesso!')
                this.getPlaylists()
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    addTrack = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        axios.post(url, body, {
            headers: {
                Authorization: "henrique-galvao-paiva"
            }
        })
            .then((res) => {
                alert('Track added')
                this.setState({ name: '', artist: '', url: '' })
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }


    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "henrique-galvao-paiva"
            }
        })
            .then((res) => {
                console.log(res.data.result.tracks)
                this.setState({ tracks: res.data.result.tracks })
            }).catch((err) => {
                console.log(err)
            })
    }


    render() {
        // console.log(this.state.playlists)
        const playlists = this.state.playlists.map((playlist) => {
            return (
                <CardPlaylists key={playlist.id}>
                    {playlist.name}
                    <Buttons>
                        <button onClick={() => this.getPlaylistTracks(playlist.id)}>See Playlist</button>
                        <button onClick={() => this.addTrack(playlist.id)}>Add Track</button>
                        <button onClick={() => this.delPlaylist(playlist.id)}>X</button>
                    </Buttons>
                </CardPlaylists>
            )
        })
        const tracks = this.state.tracks.map((track) => {
            return (
                <CardTracks key={track.id}>
                    <Info>
                    <p>Nome:<strong>{track.name}</strong></p>
                    <p>Artist: <strong>{track.artist}</strong></p>
                    </Info>
                    <audio controls autoplay>
                    <source src={track.url}/>
                    </audio>
                </CardTracks>
            )
        })
        return (
            <Main>
                <h1>Playlists</h1>
                <h3>Add Track</h3>
                <input placeholder="Name" value={this.state.tracks.name} onChange={this.onChangeName}></input>
                <input placeholder="Artist" value={this.state.tracks.artist} onChange={this.onChangeArtist}></input>
                <input placeholder="Link to Track" value={this.state.tracks.url} onChange={this.onChangeUrl}></input>

                <h3>Just Created:</h3>
                {playlists}
                <h3>Tracks</h3>
                {tracks}

                <Botao onClick={this.props.irParaHome}>Voltar</Botao>
            </Main>

        );
    }
}
