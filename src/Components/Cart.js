import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, modifyQuantity, clearCart, confirmOrder }) => {
    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? <p>Cart is empty</p> : cart.map(item => (
                <CartItem key={item.id} item={item} modifyQuantity={modifyQuantity} />
            ))}
            <button className="btn-danger" onClick={clearCart}>Clear All</button>
            <button className="btn-primary" onClick={confirmOrder}>Checkout</button>
        </div>
    );
};

export default Cart;
