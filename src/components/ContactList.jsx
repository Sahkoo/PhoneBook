import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactList = ({ contacts, onDelete }) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <li key={id}>
                <span style={{ fontWeight: 600, color: '#2a4365' }}>{name}</span>: {number} {" "}
                <button onClick={() => onDelete(id)} style={{ marginLeft: 8, background: '#e53e3e', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 10px', cursor: 'pointer' }}>Delete</button>
            </li>
        ))}
    </List>
);

export default ContactList;
