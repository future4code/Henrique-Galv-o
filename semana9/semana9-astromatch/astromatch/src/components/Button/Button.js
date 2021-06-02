import React from 'react'
import axios from 'axios'

export default function Button (props) {

    const selectMatch = (match) => {
        const header = {

            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = {

            id: props.id,
            choice: match

        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/henrique/choose-person", body, header)
            .then(() => {
                props.getProfile()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    
    return(
        <div>
            <button onClick={()=> selectMatch(false)}>No</button>
            <button onClick={()=> selectMatch(true)}>Yes</button>
        </div>
    )
}