import styled from 'styled-components'

export const MiniImage = styled.img`
    height:30px;
    width:30px;
    border-radius:50%;
`
export const MatchesContainer = styled.div`
    width:300px;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius:15px;
    border: 1px solid black;
    h1{
        margin:1px;
    }
    h3{
    margin:2px 0;
    width:100%;
    text-align:center;
    }
    height:530px;
`


export const Title = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    border-bottom: 1px solid lightgray;
    width:100%;
    button{
        margin-top:8px;
        margin-left:8px;
    }
    button{
        outline:none;
        background-color:transparent;
        border:none;
        height:25px;
        width:25px; 
        padding:0;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    button:hover{
        background-color:#ffcccb;
        border-radius:40%;
    }
    button:active{
        background-color:#ff726f;
    }
    `
export const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    margin:8px 0;
    position:absolute;
    bottom:90px;
    button{
        outline:none;
        background-color:red;
        color:white;
        border-radius:10px;
        border:none;
    }

`
export const Profiles = styled.button`
    outline:none;
    background-color:transparent;
    border:none;
    border-radius:10px;
    display:flex;
    flex-direction:row;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    width:100%;
    padding: 8px 0;
    :hover{
        background-color:lightgray;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }
    :active{
        background-color:pink;
    }
`