import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #b2bec3;
  border-radius: 6px;
  font-size: 1em;
  margin-bottom: 18px;
  transition: border 0.2s;
  &:focus {
    border-color: #3182ce;
    outline: none;
  }
`;

const Filter = ({ value, onChange }) => (
    <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
    />
);

export default Filter;