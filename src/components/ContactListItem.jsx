import React from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e2e8f0;
  font-size: 1.05em;
`;
const Name = styled.span`
  font-weight: 600;
  color: #2a4365;
`;
const Number = styled.span`
  color: #4a5568;
`;
const Button = styled.button`
  background: #e53e3e;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 0.95em;
  transition: background 0.2s;
  &:hover {
    background: #c53030;
  }
`;

const ContactListItem = ({ name, number, onDelete }) => (
    <Item>
        <Name>{name}</Name>
        <Number>{number}</Number>
        <Button onClick={onDelete}>Delete</Button>
    </Item>
);

export default ContactListItem;
