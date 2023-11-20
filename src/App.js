import './App.css';
import Data from "./composants/Data";

// const setting = axios.get('http://192.168.1.100/settings')
//  let setting = null;
//  axios.get('https://shelly-77-eu.shelly.cloud/device/status?id=4022d88e30e8&auth_key=MWNiMjY5dWlk404459961993DCA83AE44BC6E3A6F58906952E7BECA0A5B69DC375C964915ACBC0EA536A0639CB73')
//     .then(function (response) {
//         setting = response;
//       console.log("status", response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })

// const status = axios.get('http://192.168.1.100/status')
//     .then(function (response) {
//         // console.log("status", response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//
// const actions = axios.get('http://192.168.1.100/settings/actions')
//     .then(function (response) {
//         // console.log("actions", response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })


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
