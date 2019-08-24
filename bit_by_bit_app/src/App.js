import React from 'react';
import './App.css';

class Section extends React.Component{
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
//For any button
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
  //html of button
  render(){
    return(
      <ul><li onClick = {this.handleClick}>Match!</li></ul>
    )
  }
}

class Cube extends React.Component{
  render(){
    return(
      <div className = "Box"></div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 idName = "Title">Meet Your Match!</h1>
      </header>
      <body>
        <Section headerName = "Target_char" name = "Target: "><Cube></Cube></Section>
        <Section headerName = "Current_char" name = "Current: "></Section>
        <Section headerName = "Partner_char" name = "Partner: "></Section>
        <Section headerName = "Match_chars" name = "">
          <Button buttonName = "Match!"></Button>
        </Section>
        <Section className="section_center" headerName = "Children_chars" name = "Offspring"></Section>
      </body>
    </div>
  );
  }

export default App;
