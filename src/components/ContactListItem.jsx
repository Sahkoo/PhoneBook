import React from "react";

const ContactListItem = ({ name, number, onDelete }) => (
    <li>
        {name}: {number} <button onClick={onDelete}>Delete</button>
    </li>
);

export default ContactListItem;
