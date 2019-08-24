import React from 'react';
import styles from './App.css';

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
      <div>
      <ul className={styles.Button} onClick ={this.handleClick}>
        <li><a href="">{this.props.caption}</a></li>
      </ul>
      <p>{this.state.isToggleOn}</p>
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
        <h1 idName = "Title">Pixel Labs</h1>
      </header>
      <body>
        <Section className="section_center" headerName = "Target_char" name = "Target: "></Section>
        <Section className="section_left" headerName = "Current_char" name = "Current: "></Section>
        <Section className="section_right" headerName = "Partner_char" name = "Partner: "></Section>
        <Section className="section_center" headerName = "Match_chars" name = "">
        <Button caption = "Matched!"/>
        </Section>
        <Section className="Children_chars" headerName = "Children_chars" name = "Offspring" cond = {this.state.show_child}></Section>
      </body>
    </div>
  );
  }
  }

export default App;
