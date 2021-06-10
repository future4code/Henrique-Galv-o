import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    font-family: 'Quicksand', sans-serif;
`

export const Logo = styled.div`
    margin-top:1em;
    background-color:#81B6CD;
    border-radius:15em;
    width:44%;
    img{
        width:100%;
    }
`

export const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:1em;
    margin-bottom:1em;
    button{
        margin:0 2em 0 2em;
        outline:none;
        background-color:white;
        border:1px solid #999;
        color:black;
        padding:1em;
        border-radius:15em;
        font-family:'Quicksand';
        font-weight:600;
        :hover{
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
            cursor:pointer;
          }
        :active{
            background-color:#999;
            color:white;
        }
    }
`

export const TripCard = styled.div`
    background-color:white;
    margin:1em;
    border-radius:1em;
    padding:0 1% 0 1%;
    width:15rem;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    h3{
        :hover{
        -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        cursor:pointer;
        }
    }
`

export const ButtonsTrip = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:1em;
    margin-bottom:1em;
    button{
        outline:none;
        background-color:white;
        border:0.01em solid #999;
        color:black;
        padding:0.1em 0.1em;
        border-radius:10em;
        font-family:'Quicksand';
        font-weight:600;
        :hover{
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
            cursor:pointer;
          }
        :active{
            background-color:#999;
            color:white;
        }
    }
`