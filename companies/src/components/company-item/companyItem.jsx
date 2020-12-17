import React, { Component } from "react";
import "./companyItem.css";

class CompanyItem extends Component {
  render() {
    return (
      <>
        <tr className="list-item">
          <th>{this.props.company.id}</th>
          <th>{this.props.company.name}</th>
          <th>{this.props.company.email}</th>
          <th>{this.props.company.adress}</th>
          <th>{this.props.company.buildings.length}</th>
          <th className="btn">
            <button
              onClick={() => this.props.deleteCompany(this.props.company.id)}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </th>
        </tr>
      </>
    );
  }
}

export default CompanyItem;
