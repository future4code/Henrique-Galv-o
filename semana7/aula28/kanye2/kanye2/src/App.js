import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Body = styled.div`
  height: 100vh;
  background-color:#ccc;
  display:flex;
  align-items:center;
  flex-direction:column;
  h1, h3, button, hr, p{
    z-index:2;  
  }
  button{
    margin-top:50px;
    outline:none;
    background:transparent;
    border-radius:50%;
    height:50px;
    width:50px;
  }
  button:hover{
    background-color:black;
    color:white;
  }
  button:active{
    background-color:#A57353;
    color:white;
  }
  p{
    margin-top:50px;
    background-color:black;
    color:white;
    padding:16px;
    border-radius:15px;
    max-width:500px;
  }
  img{
    border-radius:15px;
    border:2px solid black;
    align-self:center;
    height:100%;
    width:600px;
    position:fixed;
    z-index:0;
  }
`

export default class App extends React.Component {
state = {
  quotes: {}
}
  getQuote = () => {
    axios.get('https://api.kanye.rest')
    .then((res) => {
      console.log(res.data)
      this.setState({quotes: res.data})
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  render() {
  
    return (
      <Body>
        <h1>Kanye Quotes</h1>
        <h3>Press Ye!</h3>
        <button onClick={this.getQuote}>Ye!</button>
        <p>{this.state.quotes.quote}</p>
        <img src='https://wallpaper.dog/large/10915918.jpg' />
      </Body>
    );
  }
}



