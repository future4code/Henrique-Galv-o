import React from 'react';
import UserCard from './components/UserCard/UserCard'
import Matches from './components/Matches/Matches'
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
`


export default class App extends React.Component {
  state = {
    page: 'swipe'
  }

  selectedPage = (page) => {
    this.setState({ page: page })
  }

  renderPage = () => {
    switch (this.state.page) {
      case 'swipe':
        return <UserCard choosePage={this.selectedPage} />
      case 'matches':
        return <Matches choosePage={this.selectedPage} />
      default:
        return ('Error!')
    }
  }


  

  render() {
    const showPage = this.renderPage();
    return (
      <Body>
        
        {showPage}
      </Body>
    );
  }
}



