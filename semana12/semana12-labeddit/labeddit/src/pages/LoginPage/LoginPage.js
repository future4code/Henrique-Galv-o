import React from 'react'
import logo from '../../assets/logo.png'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/Lock';
import { PageContainer, LogoImage, InputsContainer, Buttons } from './Styled'
import useForm from '../../hooks/useForm'
import { goToSignUp } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import {login} from '../../services/users'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = () => {
useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

    return (
        <PageContainer >
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
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
                                fullWidth
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
                            Login
                        </Button>
                        <Button
                            onClick={() => goToSignUp(history)}
                            type={"button"}
                            variant="text"
                            color="secondary">
                            SignUp
                        </Button>
                    </Buttons>
                </form>

            </InputsContainer>

        </PageContainer>
    )
}

export default LoginPage