import React from 'react';
import styled from 'styled-components';
import EtapaUm from './components/EtapaUm';
import EtapaDois from './components/EtapaDois';
import EtapaTres from './components/EtapaTres';
import EtapaQuatro from './components/EtapaQuatro';


export default class App extends React.Component {
  state = {
    pagina: "etapa1"
  };

  trocaDePagina = () => {
    if (this.state.pagina === "etapa1") {
      this.setState({ pagina: "etapa2" });
    } else if (this.state.pagina === "etapa2") {
      this.setState({ pagina: "etapa3" });
    } else if (this.state.pagina === "etapa3") {
      this.setState({ pagina: "etapa4" });
    }
  };

  render() {
    const renderizarPaginaNova = () => {
      if (this.state.pagina === "etapa1") {
        return <EtapaUm trocaPagina={this.trocaDePagina} />
      } else if (this.state.pagina === "etapa2"){
        return <EtapaDois trocaPagina={this.trocaDePagina} />
      } else if (this.state.pagina === 'etapa3'){
        return <EtapaTres trocaPagina={this.trocaDePagina} />
      } else if (this.state.pagina === 'etapa4'){
        return <EtapaQuatro trocaPagina={this.trocaDePagina} />
      }
    }

  return <div className="App">{renderizarPaginaNova()}</div> 
 }
}

