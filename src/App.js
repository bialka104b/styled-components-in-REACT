import React from 'react';
import styled from 'styled-components';

//zmienna która będzie odpowiadała za mój element DOM
const StyledButton = styled.button`
  margin: 20px 40%;
  color: ${(props)=> props.alt ? 'red': 'black'};
  //red bedzie na active a black będzie na niekatywnym
  background-color:yellow;
  padding:20px;
  &:hover {
    color: green;
    background-color: ${(props)=> props.alt ? 'yellow': 'black'};
    //yellow bedzie na active a black będzie na niekatywnym
  }
`
class App extends React.Component {
  state = {
    active: false
  }
  handleChange = () => {
    this.setState({
      active: !this.state.active //odwracamy wartość logiczną active
    })
  }
  render(){
    return (
      <div>
        <StyledButton 
          onClick={this.handleChange}
          alt={this.state.active}
        >Przycisk Styled components<br/> active: {this.state.active.toString()}
        </StyledButton>
      </div>
    );
  }
}

export default App;