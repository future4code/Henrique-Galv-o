import React from 'react';
import GlobalStyle from './theme/GlobalStyles';
import styled from 'styled-components'
import axios from 'axios'
import Home from './components/Home'
import Playlists from './components/Playlists'
import PlaylistsDetails from './components/PlaylistDetails'

const All = styled.div`
  background-color:black;
  color:white;
  height:100vh;
  font-family:'SignikaRegular';
  letter-spacing:1px;
`

export default class App extends React.Component {
state = {
  telaAtual: 'home'
}

escolheTela = () => {
  switch (this.state.telaAtual){
    case "home":
      return <Home irParaPlaylists={this.irParaPlaylists}/>
    case "playlist":
      return <Playlists irParaDetails={this.irParaDetails} irParaHome={this.irParaHome}/>
    case "details":
      return <PlaylistsDetails irParaHome={this.irParaHome}/>
    default:
      return <div>Erro!</div>
  }
}

irParaHome = () => {
  this.setState({telaAtual:'home'})
}

irParaPlaylists = () => {
  this.setState({telaAtual:'playlist'})
}

irParaDetails = () => {
  this.setState({telaAtual: 'details'})
}

  render() {
    return (
      <All>
        {this.escolheTela()}
      </All>

    );
  }
}


