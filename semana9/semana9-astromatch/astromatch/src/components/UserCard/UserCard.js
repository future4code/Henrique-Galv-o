import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ImgProfile, IconContainer} from './Styled'
import Button from '../Button/Button'

const UserCard = (props) => {
    const [profile, setProfile] = useState({})

    useEffect(() => {
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
        getProfile()
    }, [setProfile])




    const userPage = () => {
        props.choosePage("matches")
    }



    return (
        <div>
            <button onClick={userPage}>Matches</button>
            {profile.id && profile.name && profile.photo && profile.age && profile.bio ? (
                <div key={profile.id} id={profile.id}>
                    <ImgProfile src={profile.photo}></ImgProfile>
                    <p>{profile.age}</p>
                    <p>{profile.name}</p>
                    <p>{profile.bio}</p>
                </div>
            ) : (
                <IconContainer>
                    <a href="https://icon-library.net/icon/progress-icon-gif-29.html" title="Progress Icon Gif #276697"><img src="https://icon-library.net//images/progress-icon-gif/progress-icon-gif-29.jpg" width="50" /></a>
                    <p>Carregando...</p>
                </IconContainer>
            )}
            <Button />

        </div>
    )
}

export default UserCard;