import Header from "../header/header.jsx";
import CompaniesSect from "../companies-section/companiesSect.jsx";
import NewCompany from "../new-company/newCompany.jsx";
import "./main.css";
import dataCompanies from "../../mocks/companies.json";
import { Component } from "react";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: dataCompanies
    };
  }

  deleteCompany = (id) => {
    this.setState({ companies: [...this.state.companies].filter((comp) => comp.id !== id) });
  };

  addCompany = (company) => {
    company.id = this.state.companies[this.state.companies.length - 1].id + 1;
    this.setState({
      companies: [...this.state.companies, company],
    });
  };

  render() {
    return (
      <div className="main">
        <Header />
        <CompaniesSect companies={this.state.companies} deleteCompany={this.deleteCompany} />
        <NewCompany addCompany={this.addCompany}/>
      </div>
    );
  };
}

export default Main;
