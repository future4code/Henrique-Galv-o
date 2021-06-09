import React from 'react'
import { useHistory } from 'react-router'
import { goToAdminPage } from '../../route/coordinator'

export default function CreateTripPage(){
    const history = useHistory()
    return(
        <div>
        <form>
            <label>Nome:</label>
            <input></input>
            <label>Data:</label>
            <input></input>
            <label>Descrição</label>
            <input></input>
            <label>Duração em dias</label>
            <input></input>
            <label>URL da Imagem (preferência grande)</label>
            <input></input>
        </form>
        <button onClick={()=>goToAdminPage(history)}>Voltar</button>
        </div>
    )
}