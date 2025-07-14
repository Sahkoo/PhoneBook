import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #cbd5e0;
`;

const Button = styled.button`
  background: #2b6cb0;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  cursor: pointer;
`;

const ContactForm = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !number) return;
        onAdd({ name, number });
        setName("");
        setNumber("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Ім'я"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Телефон"
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <Button type="submit">Додати</Button>
        </Form>
    );
};

export default ContactForm;
