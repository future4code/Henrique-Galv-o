import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family: 'Quicksand', sans-serif;
   
`
export const TripContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    padding-bottom:400px;
    width:100%;
    padding-left:4vw;
    padding-top:4vh;
    color:white;
    h1{
        font-family:'Bebas Neue', cursive;
        font-size:3em;
    }
`

export const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    background-color:black;
    position:sticky;
    z-index:9;
    top:0;
    height:3.5em;
    
`

export const Logo = styled.div`
    margin-left:6vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#81B6CD;
    border-radius:50px;
    height:4vh;
    width:15vw;
    img{
        width:100%;
    }
    @media (max-width:800px){
        width:0;
        img{
            width:0;
        }
    }
`

export const Buttons = styled.div`
    margin-right:16px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    @media (max-width:800px){
        margin-right:50px;
    }
    button{
        font-size:1em;
        font-family: 'Quicksand', sans-serif;
        color:white;
        background-color:transparent;
        outline:none;
        border:none;
        margin-right:64px;
        :hover{
            text-decoration:underline;
            cursor:pointer;
                -webkit-transform: scale(1.1);
                -ms-transform: scale(1.1);
                transform: scale(1.1);
        }
    }
`

export const Invite = styled.div`
    @media(max-width:800px){
        margin-top:60%;
    }
    margin-top:60vh;
    p{
        font-size:1.25em;
    }
    button{
        outline:none;
        font-family: 'Quicksand', sans-serif;
        background-color:black;
        border:none;
        border-radius:50px;
        color:white;
        height:3em;
        width:10em;
        opacity:50%;
       :hover{
           -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
           opacity:100%;
           cursor:pointer;
           background-color:#81B6CD;
       }
    }
`
