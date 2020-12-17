import React from "react";
import "./App.css";
import Aside from './components/aside-nav/aside.jsx';
import Main from './components/main/main.jsx';

class App extends React.Component {

  deleteCompany = (id) => {
    this.setState({ companies: [...this.state.companies].filter((comp) => comp.id !== id) });
  };

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
