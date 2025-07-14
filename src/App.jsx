import React, { useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

const App = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: "Олег", number: "0671234567" },
        { id: 2, name: "Ірина", number: "0507654321" }
    ]);

    const handleAddContact = ({ name, number }) => {
        setContacts([
            ...contacts,
            { id: Date.now(), name, number }
        ]);
    };

    const handleDeleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    return (
        <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #cbd5e0", borderRadius: 8 }}>
            <h2 style={{ color: "#2b6cb0" }}>Телефонна книга</h2>
            <ContactForm onAdd={handleAddContact} />
            <ContactList contacts={contacts} onDelete={handleDeleteContact} />
        </div>
    );
};

export default App;
