import React, { Component } from "react";
import './companiesSect.css';
import dataCompanies from "../../mocks/companies.json";
import CompanyItem from "../company-item/companyItem";

class CompaniesSect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: dataCompanies
    };
  }

  deleteCompany = (id) => {
    this.setState({ companies: [...this.state.companies].filter((comp) => comp.id !== id) });
  };

  render() {
    return (
      <div className="list-section">
        <div className="container-table">
          <table>
            <tr className="titles-table">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Adress</th>
              <th>Buildings</th>
            </tr>
            {this.state.companies.map((value) => (
              <CompanyItem
                key={value.id}
                deleteCompany={this.deleteCompany}
                company={value}
              />
            ))}
          </table>
        </div>
      </div>
    );
  };
}

export default CompaniesSect;
