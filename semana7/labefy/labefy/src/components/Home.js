import React from 'react';
import styled from 'styled-components'
import axios from 'axios'


const Main = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family:'SignikaRegular';
    input{
        border-radius: 15px;
        outline:none;
        font-family:'SignikaRegular';
    }
    button{
        outline:none;
        background-color:#1DB954;
        border:none;
        color:black;
        border-radius:15px;
        margin-right:4px;
        margin-top:4px;
        font-family:'SignikaRegular';
        
    }
        button:hover{
        opacity:80%;
    }   
        button:active{
         opacity:200%;
        }
`

export default class Home extends React.Component {

    state={
        name:""
    }

    onChangePlaylist = (e) =>{
        this.setState({name: e.target.value})
    }

    createPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name
        }
        axios.post(url, body, {
            headers: {
                Authorization: "henrique-galvao-paiva"
            }
        })
        .then((res)=>{
            alert ('Playlist criada com sucesso!')
            this.setState({name:""})
            // console.log(res)

        })
        .catch((err)=>{
            // console.log(err)
        })
    }

    render() {
        return (
            <Main>
                <h1>Labefy</h1>
                <h2>Create Your Playlist</h2><input onChange={this.onChangePlaylist} value={this.state.name} placeholder="Name playlist"></input>
                <button onClick={this.createPlaylists}>Create</button>
                <button onClick={this.props.irParaPlaylists}>See All Playlists</button>
            </Main>
        )
    }
}
