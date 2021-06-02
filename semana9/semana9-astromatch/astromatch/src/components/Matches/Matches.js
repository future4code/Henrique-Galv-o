import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { MiniImage } from './Styled'

const Matches = (props) => {

    const [list, setList] = useState([])

    useEffect(() => {
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
        getMatches();
    }, [setList])

    
    const clearMatches = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/henrique/clear")
            .then((res) => {
                alert('Matches deleted!')

            })
            .catch((err) => {
                alert('Matches were not deleted!')
            })
    }


    const userPage = () => {
        props.choosePage("swipe")
    }

    return (
        <div>
            <h1>Matches</h1>
            <button onClick={userPage}>Profiles</button>
            <button onClick={clearMatches}>Clear Matches</button>
            <div key={list.id}>
                {list.map((matches) => {
                    return (
                        <div><MiniImage src={matches.photo}></MiniImage> {matches.name}, {matches.age}</div>

                    )
                })}

            </div>
        </div>
    )
}

export default Matches;