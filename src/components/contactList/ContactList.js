import React from 'react';
import { ContactItem } from './contactItem/ContactItem.js';

export function ContactList({ contacts, delContact }) {
  return (
    <ul>
      {contacts.map(el => (
        <ContactItem key={el.id} contact={el} delContact={delContact} />
      ))}
    </ul>
  );
}
