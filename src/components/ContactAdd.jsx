import React, { useState } from "react";
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

const ContactAdd = ({ onAdd }) => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    // Генерація id через timestamp + випадковий суфікс
    const generateId = () =>
        Date.now().toString(36) + Math.random().toString(36).substr(2, 5)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim() || !number.trim()) return
        const newContact = { id: generateId(), name: name.trim(), number: number.trim() }
        const added = onAdd(newContact)
        if (added) {
            setName("")
            setNumber("")
        }
    }

    return (
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
    )
}

export default ContactAdd;