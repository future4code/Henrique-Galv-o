import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    @media(max-width:800px){
        justify-content:flex-start;
    }
    button{
        outline:none;
        background-color:black;
        color:white;
        border:1px solid white;
        border-radius:1em;
        width:10%;
        align-self:center;
        font-family:'Quicksand';
        font-weight:600;
        :hover{
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
            cursor:pointer;
          }
    }
`

export const Form = styled.form`
    display:flex;
    justify-content:center;
    flex-direction:column;
    color:white;
    input, textarea{
        border-radius:1em;
    }
    h2{
        margin:1em 0 1em 0;
        text-align:center;
        color:black;
        background-color:white;
        padding:1%;
        border-radius:1em;
    }
    button{
        outline:none;
        background-color:white;
        color:black;
        border:none;
        border-radius:1em;
        width:33%;
        align-self:center;
        margin:1em 0 1em 0;
        font-family:'Quicksand';
        font-weight:600;
        :hover{
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
            cursor:pointer;
          }
    }
`
export const Logo = styled.div`
    background-color:#81B6CD;
    border-radius:15em;
    width:44%;
    img{
        width:100%;
    }
    @media(max-width:800px){
        
            margin-top:50px;

    }
`
