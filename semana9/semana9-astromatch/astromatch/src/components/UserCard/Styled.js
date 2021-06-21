import styled from 'styled-components'

export const ImgProfile = styled.img`
    height:350px;
    width:280px;
    border-radius:10px;
    margin-top:4px;
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

export const IconContainer = styled.div`
    height:300px;
    width:300px;
    display: flex;
    flex-direction:column;
    align-items: center;
`

export const IconButton = styled.img`
    
  
`


export const ContainerProfile = styled.div`
    width:300px;
   
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items: center;
    p{
        margin:2px;
    }
    p:first-of-type{
        font-size:20px;
    }
    p:nth-child(3){
        text-align:center;
    }
`
export const SwipeContainer = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius:15px;
    border: 1px solid black;
    h1{
        margin:1px;
    }
    
`