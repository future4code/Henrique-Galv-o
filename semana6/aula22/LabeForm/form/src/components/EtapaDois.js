import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  h1{
    font-size:20px;
    font-weight:bold;
  }
`


export default class EtapaUm extends React.Component {
  render(){
  return (
  <FormContainer>
    <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
    <p>5. Qual curso?</p>
    <input type="text" />
    <p>6. Qual a unidade de ensino?</p>
    <input type="text" />
    <button onClick={this.props.trocaPagina}>Próxima etapa</button>
  </FormContainer>
  )
}
}