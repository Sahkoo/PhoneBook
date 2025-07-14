import React, { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactList = ({ contacts, onDelete }) => {
    const [filter, setFilter] = useState("");

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <input
                type="text"
                placeholder="Find contacts by name"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                style={{ width: "100%", marginBottom: 16, padding: 6 }}
            />
            <List>
                {filteredContacts.map(({ id, name, number }) => (
                    <li key={id}>
                        <span style={{ fontWeight: 600, color: '#2a4365' }}>{name}</span>: {number} {" "}
                        <button onClick={() => onDelete(id)} style={{ marginLeft: 8, background: '#e53e3e', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 10px', cursor: 'pointer' }}>Delete</button>
                    </li>
                ))}
            </List>
        </>
    );
};



export default ContactList;
