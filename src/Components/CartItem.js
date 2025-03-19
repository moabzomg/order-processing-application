import React from "react";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.name, newQuantity);
  };

  return (
    <tr className="cart-item">
      <td className="item-name">{item.name}</td>
      <td className="quantity-controls">
        <button
          className="quantity-button minus"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <input
          type="number"
          className="quantity-input"
          value={item.quantity}
          min="1"
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
        />
        <button
          className="quantity-button plus"
          onClick={() => handleQuantityChange(item.quantity + 1)}
        >
          +
        </button>
      </td>
      <td className="item-price">£{item.price.toFixed(2)}</td>
      <td className="item-total">£{(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <button
          className="remove-button"
          onClick={() => removeFromCart(item.name)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
