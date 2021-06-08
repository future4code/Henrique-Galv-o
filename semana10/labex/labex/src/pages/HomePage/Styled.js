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
    border-radius:50px;
`

export const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:16px;
    
`
export const ButtonTrip = styled.button`
    margin-right:32px;
    outline:none;
    background-color:white;
    color:white;
    border:none;
    border-radius:50px;
    width:200px;
    height:50px;
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
export const ButtonRestrict = styled.button`
    outline:none;
    background-color:black;
    color:white;
    border:3px solid white;
    border-radius:50px;
    width:200px;
    height:50px;
    button{
        font-family: 'Quicksand', sans-serif;
        outline:none;
        background:transparent;
        border:none;
        background-color:transparent;
        color:white;
        cursor:pointer;
    }
    :hover{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        cursor:pointer;
        background-color:#8b0000;
      }
`


