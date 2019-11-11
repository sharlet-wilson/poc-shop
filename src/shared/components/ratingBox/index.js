import React from 'react';
import styled from 'styled-components';

export default ({ noOfRatings, rating }) => {

  const RatingWrapper = styled.div`
    width: 224px;
    height: 21px;
    margin-top: 10px;
    margin-left: 14px;
  `;

  const Star = styled.img`
    margin: 0 3px;
  `;

  const NumberOfRatings = styled.span`
    width: 47px;
    height: 27px;
    font-size: 23px;
    color: #222222;
  `;

  const NoRatings = styled.span`
    color: #6f6f6f;
    font-size: 12px;
  `;

  let ratings = [];
  if (noOfRatings) {
    for (let i = 0; i < rating; i++) {
      ratings.push(<Star src="/public/icons/Star.svg"></Star>)
    }
    for (let i = 0; i < (5 - rating); i++) {
      ratings.push(<Star src="/public/icons/StarGray.svg"></Star>)
    }
    ratings.push(<NumberOfRatings>({noOfRatings})</NumberOfRatings>)
  } else {
    ratings = (<NoRatings>The product has not been rated.</NoRatings>)
  }

  return (<RatingWrapper>{ratings}</RatingWrapper>)
}