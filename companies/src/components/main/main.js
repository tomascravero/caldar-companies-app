import Header from "../header/header";
import CompaniesSect from "../companies-section/companiesSect";
import NewCompany from "../new-company/newCompany";
import "./main.css";
import { Component } from "react";

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <CompaniesSect />
        <NewCompany />
      </div>
    );
  };
}

export default Main;
