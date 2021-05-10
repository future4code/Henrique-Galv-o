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
    <h1>ETAPA 1 - DADOS GERAIS</h1>
    <p>1. Qual o seu nome?</p>
    <input type="text" />
    <p>2. Qual a sua idade?</p>
    <input type="text" />
    <p>3. Qual seu email?</p>
    <input type="text" />
    <p>4. Qual a sua escolaridade?</p>
    <select>
    <option>Ensino medio incompleto</option>
    <option>Ensino medio completo</option>
    <option>Ensino superior incompleto</option>
    <option>Ensino superior completo</option>
    </select>
    <button onClick={this.props.trocaPagina}>Próxima etapa</button>
  </FormContainer>
  );
}
}