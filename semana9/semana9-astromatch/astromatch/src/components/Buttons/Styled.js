import styled from 'styled-components'

export const MainButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
`


export const ButtonNo = styled.button`
    margin: 8px 40px;
    outline:none;
    width:60px;
    height:60px;
    border-radius:50%;
    border:1px solid gray;
    background-color:transparent;
    :hover{
        background-color:#F73F6C;
    }
    :active{
        background-color:red;
    }
`

export const ButtonYes = styled.button`
    margin: 8px 40px;
    outline:none;
    width:60px;
    height:60px;
    border-radius:50%;
    border:1px solid gray;
    background-color:transparent;
    :hover{
        background-color:#4BC78F;
    }
    :active{
        background-color:green;
    }
` 