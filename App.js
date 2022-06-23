import logo from './logo.svg';
import './App.css';
import './Jsx'
import { element1, element2, element3, element4 } from './Jsx';


export let C1=()=> element1;
export let C2=()=>element2;
export let C3=()=>element3;
export let C4=()=>element4;


// function OkButton(){
//   React.createElement(myButton, {color:'blue'}, 'Click Me');
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
