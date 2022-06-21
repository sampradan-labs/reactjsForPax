import logo from './logo.svg';
import './App.css';
import React from 'react';

//Accessed as <App/>
export default function App() {
  return (
    <h1>Hello React App</h1>
  );
}

const user = {firstname:'Nandagopal', lastname:'M'} //this is a js/es object

//accessed on html as <Greeting/> == Instantiation of the class Greeting 
//In js function can be used for a class
export function Greeting(){
  return (<h3>Namaste {user.firstname} {user.lastname}</h3>);
}

export class Container extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
    <div>
    <h1>This is a container component</h1>
    <hr></hr>
    <App/>
    <Greeting/>
    </div>);
  }
}
