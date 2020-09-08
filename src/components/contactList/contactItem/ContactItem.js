import React from 'react';

export function ContactItem({ contact: { name, number, id }, delContact }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        data-id={id}
        onClick={e => {
          delContact(e.target.dataset.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
