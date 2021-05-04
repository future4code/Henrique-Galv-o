import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQH7VJzuX0_7Cg/profile-displayphoto-shrink_800_800/0/1590608276654?e=1625702400&v=beta&t=w5FJoalHHRwX6Q-_3XhFrWWe0tNbRnhxU0JtjMb29C4" 
          nome="Henrique Galvão" 
          descricao="Oi, eu sou o Henrique Galvão. Sou formado em Marketing pela University of Arizona. Me formei focando
          em analise e marketing digital. Hoje faço curso na Labenu de Desenvolvedor Full Stack para ter mais oportunidades na vida."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
      <CardPequeno 
          icone="https://www.flaticon.com/svg/vstatic/svg/725/725643.svg?token=exp=1620147945~hmac=b891f5b34436392e4d12f0f676ca2f7f"  
          tipo="Email: "
          email="henrique.galvao@hotmail.com"
        />
      <CardPequeno 
          icone="https://www.flaticon.com/svg/vstatic/svg/3313/3313929.svg?token=exp=1620148165~hmac=52e05a1dad7e04e9a7c44c909bee402d"  
          tipo= "Endereço: "
          email="Rua tatata, 209"
        /> 
      </div>
      <div className="page-section-container">
        <h2>Educação</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://seeklogo.com/images/U/university-of-arizona-a-logo-0B223BEA9A-seeklogo.com.png" 
          nome="University Of Arizona" 
          descricao="Formação em Marketing" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062019/224x86.png?yI0d1d6yd4gJc4S7NwO0w44ZVh2ykpvp&itok=6sukCaUj" 
          nome="DocuSign" 
          descricao="Estágiario de Business Development" 
        />
        </div>
        

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
