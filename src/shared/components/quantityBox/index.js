import React from 'react';
import styled from 'styled-components';

export default ({ addedQuantity, availableQuantity, onQuantityChange }) => {
  const Quantity = styled.div`
    width: 32px;
    height: 30px;
    border: 1px solid #c8c8c8;
    font-size: 14px;
    color: #474747;
    text-align: center;
    line-height: 30px;
    display: inline-block;
  `;
  const Button = styled.button`
    display: inline-block;
    background: transparent;
    border: none;
    position: relative;
    top: 2px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  `;

  return (<div>
    <Button disabled={!addedQuantity} onClick={() => onQuantityChange(-1)}>
      <img style={{ height: '17px' }} src="/public/icons/FontAwesome47.svg"></img>
    </Button>
    <Quantity>{addedQuantity}</Quantity>
    <Button disabled={addedQuantity === availableQuantity} onClick={() => onQuantityChange(1)}>
      <img src="/public/icons/PixleIcon.svg"></img>
    </Button>
  </div>)
}