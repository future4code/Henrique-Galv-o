import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    height:100vh;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:black;
    button{
        outline:none;
        background-color:transparent;
        color:red;
        border:none;
        text-decoration:underline;
        z-index:2;

        :hover{
            color:white;
            cursor:pointer;
        }
        @media (max-width:800px){
            z-index:2;
            background-color:white;
            color:black;
            padding:2%;
            border-radius:15%;
        }
    }
`
export const AstronautImg = styled.img`
    height:98%;
    bottom:0;
    left:2em;
    position:absolute;
    z-index:1;
    @media (max-width:800px){
        height:40%;
        bottom:4;
    }
`

export const Buttons = styled.div`
    margin-top:1em;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    button{
        padding:1em;
        color:white;
        background-color:black;
        text-decoration:none;
        border-radius:15em;
        outline:none;
        border:none;
        :hover{
            cursor:pointer;
                -webkit-transform: scale(1.1);
                -ms-transform: scale(1.1);
                transform: scale(1.1);
        }
    }
    @media (max-width:800px){

    }
`

export const Form = styled.form`
    z-index:2;
    padding:1em;
    width:30%;
    height:60%;
    border:1px solid black;
    border-radius:1em;
    background-color:white;
    display:flex;
    justify-content:center;
    flex-direction:column;
    input{
        border-radius:0.5em;
        border:1px solid gray;
    }
    textarea{
        border-radius:0.5em;
        outline:none;
        border:1px solid gray;
    }
    select{
        border-radius:0.5em;
        border:1px solid gray;
    }
    h3{
        font-size:1.5em;
        text-align:center;
    }
    @media (max-width:800px){
     width:80%;   
    }
`