import React from "react";
import data from "./components/data/companies.json";
import "./App.css";
import Aside from './components/aside-nav/aside';
import Main from './components/main/main';

console.log(data);
class App extends React.Component {
  render() {
    return (
      <div className="content-page">
        <Aside />
        <Main />
      </div>
    );
  }
}

export default App;
