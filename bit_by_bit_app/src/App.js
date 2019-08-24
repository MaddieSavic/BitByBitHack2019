import React from 'react';
import './App.css';

class Section extends React.Component{
  render(){
    if(this.props.cond){
      return(
      <div idName = {this.props.headerName}>
    <h2 className = "subheader">
      {this.props.name}
    </h2>
    {this.props.children}
    </div>
      );
    }
    else{
      return null;
    }
  }
}
//For any button
class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: false, show_child: this.props.show_child};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    alert("Match was clicked");
    this.setState(state=> ({show_child: !state.show_child}));
  }
  //html of button
  render(){
    return(
      <div className = "btn">
        <a onClick = {this.handleClick}>Match!</a>
        <h2>{this.state.isToggleOn}</h2>
      </div>
      
    )
  }
}

class Cube extends React.Component{
  render(){
    return(
      <div className = "Box">
        <h2>This will be a cube</h2>
      </div>
    );
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={show_child: false}
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1 id = "Title">Meet Your Match!</h1>
      </header>
      <body>
        <Section headerName = "Target_char" name = "Target: " cond = {true}><Cube></Cube></Section>
        <div className = "sideBySide">
          <Section id = "left" headerName = "Current_char" name = "Current: " cond = {true}><Cube></Cube></Section>
          <Section id = "right"headerName = "Partner_char" name = "Partner: " cond = {true}><Cube></Cube></Section>
        </div>
        <Section headerName = "Match_chars" name = "" cond = {true}>
          <Button buttonName = "Match!" toggle = {this.state.show_child}></Button>
        </Section>
        <Section className="Children_chars" headerName = "Children_chars" name = "Offspring" cond = {this.state.show_child}><Cube></Cube></Section>
      </body>
    </div>
  );
  }
  }

export default App;
