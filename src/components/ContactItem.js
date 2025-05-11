import React from 'react';

function ContactItem({ number, contact, deleteContact }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', margin: '5px 0' }}>
      <p><strong>{number}.</strong> {contact.name} - {contact.email}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
}

export default ContactItem;
