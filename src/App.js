import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContactAdd from "./components/ContactAdd.jsx";
import Filter from "./components/Filter.jsx";
import ContactList from "./components/ContactList.jsx";

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const Container = styled.div`
  max-width: 420px;
  margin: 40px auto;
  padding: 32px 24px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  font-family: 'Segoe UI', Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #2a4365;
  margin-bottom: 24px;
`;

const SubTitle = styled.h2`
  color: #2b6cb0;
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 1.3em;
`;

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts!`);
      return false;
    }
    setContacts(prev => [...prev, newContact]);
    return true;
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleFilter = (e) => setFilter(e.target.value);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactAdd onAdd={addContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </Container>
  );
};

export default App;
