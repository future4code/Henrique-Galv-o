import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ImgProfile, IconContainer, ContainerProfile, SwipeContainer, Title,  } from './Styled'
import Buttons from '../Buttons/Buttons'
import { RiChat3Line } from 'react-icons/ri'
import { IconContext } from "react-icons";


const UserCard = (props) => {
    const [profile, setProfile] = useState({})


    useEffect(() => {
        getProfile()
    }, [setProfile])

    const getProfile = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/henrique/person")
            .then((res) => {
                // console.log(res.data.profile)
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const userPage = () => {
        props.choosePage("matches")
    }



    return (
        <SwipeContainer>
            <Title>
                <h1>MinimalMatch</h1>
                <button onClick={userPage}>
                    <IconContext.Provider value={{ size: '20px', className: "global-class-name" }}>
                        <div>
                            < RiChat3Line />
                        </div>
                    </IconContext.Provider>
                </button>
            </Title>
            {profile.id && profile.name && profile.photo && profile.age && profile.bio ? (
                <ContainerProfile key={profile.id} >
                    <ImgProfile src={profile.photo} alt='profile pic'></ImgProfile>
                    <p><strong>{profile.name}</strong>, {profile.age}</p>
                    <p>{profile.bio}</p>

                </ContainerProfile>
            ) : (
                <IconContainer>
                    <a href="https://icon-library.net/icon/progress-icon-gif-29.html" title="Progress Icon Gif #276697"><img src="https://icon-library.net//images/progress-icon-gif/progress-icon-gif-29.jpg" alt='loading' width="100" /></a>
                    <p>Carregando...</p>
                </IconContainer>
            )}
            <Buttons
                getProfile={getProfile}
                id={profile.id} />

        </SwipeContainer>
    )
}

export default UserCard;