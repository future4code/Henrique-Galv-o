import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    height:100vh;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:black;
`
export const AstronautImg = styled.img`
    height:98%;
    bottom:0;
    left:10px;
    position:absolute;
    z-index:1;
`

export const Buttons = styled.div`
    margin-top:8px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    button{
        padding:10px;
        color:white;
        background-color:black;
        border-radius:15px;
        outline:none;
        border:none;
        :hover{
            cursor:pointer;
                -webkit-transform: scale(1.1);
                -ms-transform: scale(1.1);
                transform: scale(1.1);
        }
        
    }
`

export const Form = styled.form`
    z-index:2;
    padding:12px;
    width:30%;
    height:50%;
    border:1px solid black;
    border-radius:15px;
    background-color:white;
    display:flex;
    justify-content:center;
    flex-direction:column;
    input{
        border-radius:5px;
        border:1px solid gray;
    }
    textarea{
        border-radius:5px;
        border:1px solid gray;
    }
    select{
        border-radius:5px;
        border:1px solid gray;
    }
    h3{
        text-align:center;
    }
`