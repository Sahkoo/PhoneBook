import React from "react";
import ContactListItem from "./ContactListItem.jsx";

const ContactList = ({ contacts, onDelete }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <ContactListItem
                key={id}
                name={name}
                number={number}
                onDelete={() => onDelete(id)}
            />
        ))}
    </ul>
);

export default ContactList;
