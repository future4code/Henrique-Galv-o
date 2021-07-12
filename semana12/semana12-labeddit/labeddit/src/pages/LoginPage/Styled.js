import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
    img{
        margin-bottom:-6vh;
    }
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
    button{
        margin-top:2vh;
        align-content:center;
    }
    form{
        display: flex;
        flex-direction:column;
        align-items:center;
    }
`

export const LogoImage = styled.img`
    margin-top:8vh;
    width:70vw;
    max-width:200px;
    max-height:200px;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    gap:16px;
    align-items:center;
`