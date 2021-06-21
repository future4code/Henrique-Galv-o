export const goToLogin = (history) =>{
    history.push('/login')
}

export const goToFeed = (history) =>{
    history.push('/')
}

export const goToPost = (history, id) =>{
    history.push(`/${id}`)
}

export const goToSignUp = (history) =>{
    history.push('/signup')
}