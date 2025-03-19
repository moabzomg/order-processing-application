import React from "react";

const ModifyItems = ({ cart, updateCart, removeFromCart }) => {
  return (
    <div>
      <h4>Modify Cart Items</h4>
      <ul className="list-group">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            {item.title} - Quantity: 
            <input 
              type="number" 
              value={item.count} 
              min="1" 
              onChange={(e) => updateCart(item.id, parseInt(e.target.value))}
              className="form-control w-25 mx-2"
            />
            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModifyItems;