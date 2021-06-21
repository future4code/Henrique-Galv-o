import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { MiniImage, MatchesContainer, Title, Buttons, Profiles } from './Styled'
import { RiUserHeartLine } from 'react-icons/ri'
import { IconContext } from "react-icons";

const Matches = (props) => {

    const [list, setList] = useState([])

    useEffect(() => {
        getMatches();
    }, [setList])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/henrique/matches")
            .then((res) => {
                console.log(res.data.matches)
                setList(res.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const clearMatches = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/henrique/clear")
            .then(() => {
                alert('Matches deleted! Go back swiping!')
                getMatches()

            })
            .catch(() => {
                alert('Matches were not deleted!')
            })
    }


    const userPage = () => {
        props.choosePage("swipe")
    }

    return (
        <MatchesContainer>
            <Title>
                <h1>MinimalMatch</h1>
                <button onClick={userPage}>
                    <IconContext.Provider value={{ size: '20px', className: "global-class-name" }}>
                        <div>
                            < RiUserHeartLine />
                        </div>
                    </IconContext.Provider>
                </button>
            </Title>    
            <h3>Matches</h3>

            {list.map((matches) => {
                return (
                    <Profiles key={matches.id}>
                        <MiniImage src={matches.photo}></MiniImage><strong>{matches.name}, {matches.age}</strong> 
                    </Profiles>
                )
            })}

            <Buttons>
                <button onClick={clearMatches}>Clear Matches</button>
            </Buttons>
        </MatchesContainer>
    )
}

export default Matches;