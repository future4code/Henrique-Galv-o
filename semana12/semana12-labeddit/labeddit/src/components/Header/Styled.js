import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar'

export const StyledToolbar = styled(Toolbar)`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background-color:white;
    color:black;
`

export const LeftBar = styled.div`
    button{
        font-family: 'Bitter', serif;
        text-transform:lowercase;
        font-size:20px;
        outline:none;
        border:none;
        :hover{
            background-color:transparent;
        }
    }
`