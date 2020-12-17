import React, { Component } from 'react';
import './newCompany.css';

export class NewCompany extends Component {
  state = {
    name: '',
    adress: '',
    buildings: [],
    email: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  create = (e) => {
    e.preventDefault();
    const newCompany = {
      name: this.state.name,
      adress: this.state.adress,
      buildings: [this.state.buildings],
      email: this.state.email,
    };
    this.props.addCompany(newCompany);
    this.setState({
      name: '',
      adress: '',
      buildings: [],
      email: 0,
    });
  };

  render() {
    return (
      <>
      <div className="list-section">
        <div className="list-section-new">
          <h2 className="title-component">Add New Company</h2>
          <form className="forms-display" onSubmit={this.create}>
            <input
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
              name="name"
              type="text"
              required
            />
            <input
              value={this.state.adress}
              onChange={this.handleChange}
              placeholder="Adress"
              name="adress"
              type="text"
              required
            />
            <input
              value={this.state.buildings}
              onChange={this.handleChange}
              placeholder="Building"
              name="buildings"
              type="text"
              required
            />
            <input
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              name="email"
              type="email"
              required
            />
            <button type="submit"> 
              Add
            </button>
          </form>
        </div>
        </div>
      </>
    );
  }
}
export default NewCompany;