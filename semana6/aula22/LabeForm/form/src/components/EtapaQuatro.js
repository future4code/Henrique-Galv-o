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
    <h1>O FORMULÁRIO ACABOU</h1>
    <p>Muito obrigado por participar! Entraremos em contato!</p>
  </FormContainer>
  )
}
}