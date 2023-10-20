import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Data from "./composants/Data";

const setting = axios.get('http://192.168.1.100/settings')
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    })

const status = axios.get('http://192.168.1.100/status')
    .then(function (response) {
    })
    .catch(function (error) {
        console.log(error);
    })

const actions = axios.get('http://192.168.1.100/settings/actions')
    .then(function (response) {
    })
    .catch(function (error) {
        console.log(error);
    })


function App() {


  return (
    <div className="App">
      <header className="App-header">
          <Data/>
      </header>
    </div>
  );
}

export default App;
