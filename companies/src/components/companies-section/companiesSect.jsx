import React, { Component } from "react";
import './companiesSect.css';
import CompanyItem from "../company-item/companyItem.jsx";

class CompaniesSect extends Component {
  render() {
    return (
      <div className="list-section">
        <div className="container-table">
          <table>
            <tr id="titles-table">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Adress</th>
              <th>Buildings</th>
            </tr>
            {this.props.companies.map((company) => (
              <CompanyItem
                key={company.id}
                deleteCompany={this.props.deleteCompany}
                company={company}
              />
            ))}
          </table>
        </div>
      </div>
    );
  };
}

export default CompaniesSect;
