import React from 'react'
import logo from '../../assets/logo.png'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { PageContainer, LogoImage, InputsContainer,Buttons } from './Styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom';
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { signUp } from '../../services/users';


const SignUpPage = () => {
// useUnprotectedPage()

    const history = useHistory()
    const [form, onChange, clear] = useForm({ username:"", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history)
    }
    return (
        <PageContainer >
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                name={"username"}
                                value={form.username}
                                onChange={onChange}
                                required
                                label="Name" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AlternateEmailIcon />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                type="email"
                                name={"email"}
                                value={form.email}
                                onChange={onChange}
                                required
                                label="Login" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LockIcon />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                name={"password"}
                                value={form.password}
                                onChange={onChange}
                                type="password"
                                label="Password" />
                        </Grid>
                    </Grid>
                    <Buttons>
                    <Button
                        type={"submit"}
                        variant="contained"
                        color="primary">
                        Create
                    </Button>
                    </Buttons>
                </form>
               
            </InputsContainer>

        </PageContainer>
    )
}

export default SignUpPage