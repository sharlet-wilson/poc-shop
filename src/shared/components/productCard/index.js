import React from 'react';
import styled from 'styled-components';

import RatingBox from '../ratingBox';
import Button from '../button';
import QuantityBox from '../quantityBox';

export default ({ product, qtyInCart, qtyAvailable, onQtyChange }) => {
  const Container = styled.div`
    width: 251px;
    height: 526px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    background-color: #ffffff;
    position: relative;
  `;

  const Thumbnail = styled.img`
    width: 241px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    display: block;
  `;

  const Title = styled.div`
    width: 228px;
    height: 31px;
    font-size: 27px;
    color: #222222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 15px;
    margin-top: 25px;
  `;

  const Description = styled.div`
    width: 224px;
    height: 105px;
    font-size: 14px;
    color: #000000;
    overflow-y: auto;
    line-height: 21px;
    margin-left: 14px;
    margin-top: 8px;
  `;

  const Discount = styled.div`
    background: black;
    width: 45px;
    height: 45px;
    position: absolute;
    text-align: center;
    transform: rotate(45deg);
    top: 15px;
    right: 25px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 45px;
      width: 45px;
      background: black;
      transform: rotate(135deg);
    }
  `;

  const DiscountText = styled.span`
    color: white;
    position: absolute;
    transform: rotate(-45deg);
    left: 5px;
    top: 15px;
  `;

  const Price = styled.div`
    width: 125px;
    height: 27px;
    font-size: 23px;
    color: #222222;
    margin-top: 24px;
    margin-left: 17px;
  `;

  const AddItem = styled.div`
    margin-left: 15px;
    margin-top: 19px;
  `;

  const QuantityBoxWrapper = styled.div`
    display: inline-block;
    margin-left: 10px;
  `;

  const handleUpdateCart = () => {
    const qtyToBeAdded = qtyInCart ? -qtyInCart : 1;
    onQtyChange(qtyToBeAdded);
  }

  return (<Container>
    <Thumbnail src={product.thumbnail} />
    {product.discount && <Discount><DiscountText>{product.discount}</DiscountText></Discount>}
    <Title title={product.name}>{product.name}</Title>
    <Description>{product.description}</Description>
    <RatingBox noOfRatings={product.noOfRatings} rating={product.rating} />
    <Price>${product.price}</Price>
    <AddItem>
      <Button
        type={qtyInCart ? "danger" : "primary"}
        text={qtyInCart ? "Remove from Cart" : "Add to Cart"}
        handleClick={handleUpdateCart}
      />
      <QuantityBoxWrapper>
        <QuantityBox addedQuantity={qtyInCart} availableQuantity={qtyAvailable} onQuantityChange={onQtyChange} />
      </QuantityBoxWrapper>
    </AddItem>
  </Container>)
}