import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { C4 } from './App';
import { C1, C2, C3 } from './App';
import reportWebVitals from './reportWebVitals';
import { Loop } from './HooksComponent';
import { Avatar, Movie,Clock } from './Props';
import { CustomButton,Login } from './states';
import { LifeCycle } from './Lifecycle';
import {Parent} from './C2C';
import { Users } from './http/usingFetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
const ticker = ReactDOM.createRoot(document.getElementById('ticker'));
let fontColor= "color:blue";
let timeAtLoad=new Date();
let avatar= {
  name: 'avatar-kitten',
  avatarUrl: 'http://placekitten.com/g/64/64',
  comment: "Enjoyed your post. Thanks!"
}
root.render(
  <React.StrictMode>
  <span style={{fontColor}}><C2></C2></span>
  <hr></hr>
  <h2>You loaded the react app at: {timeAtLoad.toLocaleTimeString()} </h2>  
  <C1/>
  <h3>User Avatar</h3>
  <C3></C3>
  <hr></hr>
  <Loop/>
  <hr></hr>  
  <Avatar avatarUrl={avatar.avatarUrl} name={avatar.name} comment={avatar.comment}/>
  <hr></hr>
  <Movie name="Jumanji" genre="Action"/>  
  <CustomButton/>
  <hr></hr>
  <Parent/>
  <Users/>
  </React.StrictMode>
);



function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <h4>You have spent: {Math.round(((new Date().getTime() - timeAtLoad.getTime())/1000)/60)} min.</h4>
      <hr></hr>
      <Clock date={new Date()}/>
      <LifeCycle/>
      <Login role='Standard'/>
    </div>
  );
  ticker.render(element);
}

setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
