import React from 'react';
import axios from 'axios'
import { RiHeartLine, RiCloseFill } from 'react-icons/ri'
import { IconContext } from "react-icons";
import { ButtonNo, ButtonYes, MainButton } from './Styled'

export default function Buttons(props) {

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
        console.log(body)
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/henrique/choose-person", body, header)
            .then(() => {
                props.getProfile()
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <MainButton>
            <ButtonNo onClick={() => selectMatch(false)}>
                <IconContext.Provider value={{ size: '20px', className: "global-class-name" }}>
                    <div>
                        < RiCloseFill />
                    </div>
                </IconContext.Provider>
            </ButtonNo>
            <ButtonYes onClick={() => selectMatch(true)}>
                <IconContext.Provider value={{ size: '20px', className: "global-class-name" }}>
                    <div>
                        < RiHeartLine />
                    </div>
                </IconContext.Provider>
            </ButtonYes>
        </MainButton>
    )
}