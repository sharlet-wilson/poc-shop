import React, { useState, useEffect } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'

import s from './productList.css';
import ProductCard from '../productCard';

export default ({ category }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  useStyles(s);
  const content = React.createRef();
  useEffect(() => {
    if (content.current.scrollWidth - content.current.offsetWidth) {
      setShowCarousel(true);
    }
  }, []);

  const onClickLeft = () => {
    content.current.scrollLeft -= content.current.offsetWidth;
  }
  const onClickRight = () => {
    content.current.scrollLeft += content.current.offsetWidth;
  }
  const handleQtyChange = () => {
    console.log("**********handleQtyChange called in ProductList component************")
  }

  return (<>
    <h2 className="title">{category.categoryName || 'Special Offers'}</h2>
    {showCarousel && (<>
      <button onClick={onClickLeft} className="scroll-btn left">{`<`}</button>
      <button onClick={onClickRight} className="scroll-btn right">{`>`}</button>
    </>)}
    <div className="product-list" ref={content}>
      {category.items.map(item => (<ProductCard key={item.id} product={item} onQtyChange={handleQtyChange} />))}
    </div>
  </>);
}