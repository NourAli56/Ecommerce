import React from 'react';
import styles from './products.module.css';

export default function CardProduct({ product, addToCart, count, onCountChange }) {
  const handleIncrement = () => {
    if (count < product.count) {
      onCountChange(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      onCountChange(count - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= product.count) {
      onCountChange(value);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.oneProduct}>
      <div className={styles.addToCart}>
        <i className="fa fa-plus" onClick={handleIncrement}></i>
        <input type="number" value={count} onChange={handleInputChange} />
        <i className="fa fa-minus" onClick={handleDecrement}></i>
      </div>
      <div className={styles.count}>{product.count}</div>
      <span className={styles.price}>{product?.price}</span>
      <div style={{ width: '100%' }} className="d-flex items-center justify-center">
        <img className={styles.imgProduct} src={product?.images[0]} alt={product?.title} />
      </div>
      <div style={{ margin: '30px' }}>
        <div className="d-flex items-center justify-between" style={{ marginBottom: '15px' }}>
          <span>{product?.title}</span>
          {product?.category && <div className={styles.productCategory}>{product?.category}</div>}
        </div>
        <p>{product?.description}</p>
        <button className={styles.btnAddToCart} onClick={handleAddToCart} disabled={count === 0}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
