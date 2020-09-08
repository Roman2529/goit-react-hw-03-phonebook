import React, { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm.js';
import { ContactList } from './contactList/ContactList.js';
import { Filter } from './filter/Filter.js';
const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermion Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  addContact = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} added to contacts`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  getFilterName = value => {
    this.setState({ filter: value });
  };

  delContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    const parseLocalContacts = JSON.parse(localContacts);
    if (parseLocalContacts) {
      this.setState({ contacts: [...parseLocalContacts] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    const filteredItems = filterContacts(contacts, filter);
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 ? (
          <Filter getFilterName={this.getFilterName} />
        ) : null}
        <ContactList contacts={filteredItems} delContact={this.delContact} />
      </>
    );
  }
}
