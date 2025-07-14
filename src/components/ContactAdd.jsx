import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: #f7fafc;
  padding: 18px 14px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.07);
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #2a4365;
`;
const Input = styled.input`
  margin-top: 6px;
  padding: 8px 10px;
  border: 1px solid #b2bec3;
  border-radius: 6px;
  font-size: 1em;
  transition: border 0.2s;
  &:focus {
    border-color: #3182ce;
    outline: none;
  }
`;
const Button = styled.button`
  background: linear-gradient(90deg, #3182ce 0%, #63b3ed 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 0;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #2b6cb0 0%, #4299e1 100%);
  }
`;

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const ContactsContext = React.createContext();

const ContactAdd = () => {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : initialContacts;
  });
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts!`);
      return;
    }
    setContacts(prev => [
      ...prev,
      { id: Date.now().toString(), name, number }
    ]);
    setName("");
    setNumber("");
  };

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </ContactsContext.Provider>
  );
};

export default ContactAdd;