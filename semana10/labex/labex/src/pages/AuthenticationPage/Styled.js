import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100vw;
    height:100vh;
    font-family: 'Quicksand', sans-serif;
`

export const Logo = styled.div`
    background-color:#81B6CD;
    border-radius:5em;
    z-index:2;
`

export const Buttons = styled.div`
    display:flex;
    margin-top:16px;
    align-items:center;
    justify-content:center;
    z-index:2;
`
export const ButtonTrip = styled.button`
    outline:none;
    background-color:white;
    color:white;
    border:none;
    border-radius:5em;
    width:4em;
    height:2em;
    :hover{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        cursor:pointer;
      }
    button{
        font-family: 'Quicksand', sans-serif;
        font-weight:600;
        outline:none;
        background-color:transparent;
        border:none;
        cursor:pointer;
    }
`


export const LoginContainer = styled.div`
      background-color:white;
      color:black;
      width:30%;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:16px;
      margin-top:8px;
      border:1px solid #999;
      border-radius:1em;
      z-index:2;
`
export const Login = styled.div`
    input{
        width:80%;
        margin:8px;
    }
`

export const SendButton = styled.button`
    outline:none;
    background-color:black;
    opacity:70%;
    color:white;
    padding:0.5em;
    border-radius:5em;
    border:none;
    :hover{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        cursor:pointer;
        opacity:100%;
    }
`

export const AlienImage = styled.img`
    position:absolute;
    height:50%;
    bottom:0;
    z-index:1;
    right:10%;
`