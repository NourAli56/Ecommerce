import React, { useState } from 'react';
import Titles from '../../general/titles';
import { useProducts } from '../../../custom-hooks/useProducts';
import CardProduct from './CardProduct';
import styles from './products.module.css';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../redux/actions/ActionProducts';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { usePagenation } from '../../../custom-hooks/usePagenation';
import SinglePagenation from '../../general/Pagination/SinglePagenation';
import ReactLoading from 'react-loading';

export default function Products() {
  const products = useProducts();
  const { loadingProducts } = useSelector((state) => state.productsState);
  const dispatch = useDispatch();
  const { displayArr, pageCount, changePage } = usePagenation(products, 9);

  const [counts, setCounts] = useState({});

  const handleAddToCart = (product) => {
    const productCount = counts[product.id] || 0;
    if (productCount > 0) {
      dispatch(addProductToCart({ ...product, my_count: productCount }));
      toast.success('Added to cart successfully');
    }
  };

  const handleCountChange = (id, newCount) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: newCount,
    }));
  };

  return (
    <div className={styles.contentHome}>
      <Toaster position="top-right" reverseOrder={false} />
      <Titles title="Products" />
      {loadingProducts ? (
        <div className="d-flex items-center justify-center" style={{ width: '100%', height: '400px' }}>
          <ReactLoading type="cylon" color="#F79E10" height={'7%'} width={'7%'} />
        </div>
      ) : (
        <div className={`${styles.divProduct} d-flex items-start gap-30`}>
          {displayArr?.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
              count={counts[product.id] || 0}
              onCountChange={(newCount) => handleCountChange(product.id, newCount)}
            />
          ))}
        </div>
      )}
      <br />
      <br />
      <SinglePagenation pageCount={pageCount} changePage={changePage} />
      <br />
    </div>
  );
}
