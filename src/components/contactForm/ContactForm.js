import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  submitForm = e => {
    e.preventDefault();
    const elem = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    this.props.onAddContact(elem);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <form onSubmit={this.submitForm}>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Number
            <input
              name="number"
              type="text"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </>
    );
  }
}
