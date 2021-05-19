import React from 'react';
import styled from 'styled-components'
import Home from './components/Home'
import Lista from './components/Lista'

const Pagina = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  button{
    outline:none;
    background-color:black;
    color:white;
    border-radius:15px;
  }
`

export default class App extends React.Component {
  state = {
    pagina: "criar"
  }

  trocaDePagina = () => {
    if (this.state.pagina === "criar") {
      this.setState({ pagina: "lista" })
    } else if (this.state.pagina === "lista") {
      this.setState({ pagina: "criar" })
    }
  };

  render() {

    const renderizaPagina = () => {
      if (this.state.pagina === 'criar') {
        return <Home trocaDePagina={this.trocaDePagina} />;
      } else if (this.state.pagina === 'lista') {
        return <Lista trocaDePagina={this.trocaDePagina} />
      }
    };
    return <Pagina>
          <h1>Labenusers</h1>
          <button onClick={this.trocaDePagina}>Trocar de página</button>
          {renderizaPagina()}
      </Pagina>
    
  }
}