import React, { useState } from 'react';
import { Modal as RModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from './products.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart, clearCart, updateProducts } from '../../../redux/actions/ActionProducts';
import toast, { Toaster } from 'react-hot-toast';

export default function MyCart({ open, setOpen }) {
    const dispatch = useDispatch();
    const [isConfirm, setIsConfirm] = useState(false);
    const { cart } = useSelector((state) => state.productsState);

    const handleSend = () => {
        toast.success('Payment has been completed successfully.');
        cart.forEach((item) => {
            dispatch(updateProducts(item.id, item.my_count));
        });

        dispatch(clearCart());
        setIsConfirm(false);
        setOpen(false)
    };

    const handleRemove = (id) => {
        dispatch(removeProductFromCart(id));
        toast.success('The product has been removed from the cart successfully.');
    };

    const totalPrice = cart?.reduce((total, item) => {
        return total + (item.price * item.my_count);
    }, 0);

    return (
        <RModal
            open={open}
            onClose={() => {
                setOpen(false);
            }}
            classNames={{
                modal: `${styles.popupCart}`,
            }}
            focusTrapped={false}
            overlayOpacity={0.5}
        >
            <div className={styles.divMyCart}>
                <Toaster position="top-right" reverseOrder={false} />
                <h3>My Cart</h3>
                <div>
                    {cart?.length > 0 ?
                    cart?.map((cart) => {
                        return (
                            <div className={styles.oneCart} key={cart?.id}>
                                <img src={cart?.images[0]} alt={cart?.title} />
                                <div>
                                    <p>{cart?.title}</p>
                                    <p>{cart?.price.toFixed(2)} $</p>
                                    <p style={{ fontSize: "12px" }}>Count: {cart?.my_count}</p>
                                </div>
                                <i className='fa fa-trash' onClick={() => handleRemove(cart?.id)}></i>
                            </div>
                        );
                    }):<div style={{height: "250px"}} className='d-flex items-center justify-center' >There are no products in your cart.</div>}
                </div>
                {
                    cart?.length > 0 &&
                    <div style={{ margin: "25px 0px" }} className='d-flex items-center justify-between'>
                        <p>Total price: <strong>{totalPrice.toFixed(2)} $</strong></p>
                        <button onClick={() => setIsConfirm(true)} className={styles.confirme}>Confirm</button>
                    </div>
                }

                {isConfirm && (
                    <div>
                        <br />
                        <div className='d-flex items-center gap-10'>
                            <input type='radio' />
                            <span>Cash</span>
                        </div>
                        <br />
                        <div className='d-flex items-center gap-10'>
                            <input type='radio' />
                            <span>Credit</span>
                        </div>
                        <br />
                        <button onClick={handleSend} className={styles.confirme}>Send</button>
                    </div>
                )}
            </div>
        </RModal>
    );
}
