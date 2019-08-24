import React from 'react';
import './App.css';

class Section extends React.Component{
  constructor(props)
  super(props);

  render(){
  return(
    <div className = "SubSections">
    <h2 className = "subheader">
      {this.props.headerName}
    </h2>
    </div>
  )
  }
}

function onClick(){

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 idName = "Title">App Title</h1>
      </header>
      <body>
        <Section headerName = "Target_char"></Section>
        <Section headerName = "Current_char"></Section>
        <Section headerName = "Partner_char"></Section>
        <button idName = "Match" onClick = {this.onClick}>Match!</button>
        <Section headerName = "Children"></Section>
      </body>
    </div>
  );
}

export default App;
