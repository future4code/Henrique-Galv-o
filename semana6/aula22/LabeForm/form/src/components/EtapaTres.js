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
    <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
    <p>7. Por que você não terminou um curso de graduação?</p>
    <input type="text" />
    <p>8. Fez algum curso complementar?</p>
    <select>
        <option>Nenhum</option>
        <option>Curso Tecnico</option>
        <option>Curso de inglês</option>
    </select>
    <button onClick={this.props.trocaPagina}>Próxima etapa</button>
  </FormContainer>
  )
}
}