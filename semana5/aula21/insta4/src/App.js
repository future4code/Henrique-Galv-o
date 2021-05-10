import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  state = {
    posts: [
      {
        nome: "Henrique",
        fotoU: "https://picsum.photos/50/50",
        fotoP: "https://picsum.photos/200/150"
      },
      {
        nome: "Gabriel",
        fotoU: "https://picsum.photos/50/50",
        fotoP: "https://picsum.photos/200/150"
      },
      {
        nome: "Antonella",
        fotoU: "https://picsum.photos/50/50",
        fotoP: "https://picsum.photos/200/150"
      }
    ],
    valorInputNome: "",
    valorInputFotoU: "",
    valorInputFotoP: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      fotoU: this.state.valorInputFotoU,
      fotoP: this.state.valorInputFotoP
    }
    const novosPost = [...this.state.posts, novoPost];

    this.setState({ posts: novosPost,
      valorInputNome:"",
      valorInputFotoP:"",
      valorInputFotoU:"" 
    })
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value});
  }

  onChangeInputFotoU = (event) => {
    this.setState({ valorInputFotoU: event.target.value });
  }

  onChangeInputFotoP = (event) => {
    this.setState({ valorInputFotoP: event.target.value });
  }
  render() {
    const posters = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nome}
          fotoUsuario={post.fotoU}
          fotoPost={post.fotoP}
        >
        </Post>
      )
    })

    return (

      <MainContainer>
        <input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"} />
        <input
          value={this.state.valorInputFotoU}
          onChange={this.onChangeInputFotoU}
          placeholder={"Foto De Usuario"} />
        <input
          value={this.state.valorInputFotoP}
          onChange={this.onChangeInputFotoP}
          placeholder={"Foto Do Post"} />
          <button onClick={this.adicionaPost}>Adicionar</button>
        {posters}
      </MainContainer>
    )
  }
}
export default App;
