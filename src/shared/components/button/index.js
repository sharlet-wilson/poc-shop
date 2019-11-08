import React from 'react';
import styled from 'styled-components';

export default ({ type, text }) => {
  const Button = styled.button`
    width: 130px;
    height: 34px;
    border: 1px solid #357ebd;
    border-radius: 4px;
    background-color: ${props => props.type === 'danger' ? "#fc5353" : "#428bca"};
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
  `;

  return (<Button type={type}>{text}</Button>)
}