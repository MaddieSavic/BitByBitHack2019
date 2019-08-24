import React from 'react';
import './App.css';

class Section extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
  return(
    <div idName = {this.props.headerName}>
    <h2 className = "subheader">
      {this.props.name}
    </h2>
    {this.props.children}
    </div>
  )
  }
}

class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render(){
    return(
      <button idName = "button" onClick = {this.handleClick}>Match!</button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 idName = "Title">App Title</h1>
      </header>
      <body>
        <Section headerName = "Target_char" name = "Target: "></Section>
        <Section headerName = "Current_char" name = "Current: "></Section>
        <Section headerName = "Partner_char" name = "Partner: "></Section>
        <Section headerName = "Match_chars" name = "">
          <Button buttonName = "Match!"></Button>
        </Section>
        <Section headerName = "Children_chars" name = "Offspring"></Section>
      </body>
    </div>
  );
  }

export default App;
