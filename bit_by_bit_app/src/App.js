import React from 'react';
import styles from './App.css';

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
      <div>
      <ul className={styles.Button} onClick ={this.handleClick}>
        <li><a href="">{this.props.caption}</a></li>
      </ul>
      <p>{this.state.isToggleOn}</p>
      </div>
    )
  }
}

function App() {
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
        <Section className="section_center" headerName = "Children_chars" name = "Offspring"></Section>
      </body>
    </div>
  );
  }

export default App;
