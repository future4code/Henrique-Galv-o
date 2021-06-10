import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    button{
        margin-top:1em;
        outline:none;
        border:none;
        background-color:white;
        color:black;
        border-radius:10em;
        padding:1em;
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
    display:flex;
    margin-top:1em;
    background-color:#81B6CD;
    border-radius:15em;
    align-items:center;
    justify-content:center;
    width:44%;
    img{
        width:100%;
        
    }
`

export const TripDetails = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h2{
        background-color:white;
        color:black;
        padding:1em;
        border-radius:1em;
        width:100%;
        text-align:center;  
    }
`

export const PendingCandidates = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    h2{
        background-color:white;
        color:black;
        padding:1em;
        border-radius:1em;
        width:100%;
        text-align:center;  
    }
`
export const ApprovedCandidates = styled.div`
    margin-top:1em;
    display:flex;
    flex-direction:column;
    align-items:center;
    h2{
        background-color:white;
        color:black;
        padding:1em;
        border-radius:1em;
        width:100%;
        text-align:center;  
    }
    li{
        margin:1em 0 1em 0;
        :hover{
            -webkit-transform: scale(1.1);
                -ms-transform: scale(1.1);
                transform: scale(1.1);
                cursor:pointer;
        }
    }
`
