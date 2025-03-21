import React, { useState } from "react";
import "./App.css";
import CartItem from "./Components/CartItem";
import Modal from "react-modal";
import Success from "./Components/Success";

Modal.setAppElement("#root");

const App = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 1.0 },
    { name: "Carrot", price: 2.0 },
    { name: "Chicken", price: 5.0 },
    { name: "Beef", price: 6.0 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const [message, setMessage] = useState("");
  const [shippingAddress, setShippingAddress] = useState(
    "Your Address"
  );

  const addToCart = (productName, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === productName);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            name: productName,
            quantity,
            price: products.find((p) => p.name === productName).price,
          },
        ];
      }
    });
    setMessage(`${productName} added to cart!`);
    setTimeout(() => setMessage(""), 2000);
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  const updateQuantity = (productName, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCheckout = () => {
    setIsCheckoutComplete(true);
    setTimeout(() => {
      setIsCheckoutComplete(false);
      setCart([]);
    }, 3000);
  };

  const handleAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handleSimulateClick = () => {
    addToCart("Apple", 3);
    addToCart("Banana", 5);

    setTimeout(() => {
      updateQuantity("Banana", 2);
      removeFromCart("Apple");
    }, 4000);

    setTimeout(() => {
      setIsCartOpen(true);
    }, 2000);

    setTimeout(() => {
      setShippingAddress("My address");
    }, 6000);

    setTimeout(() => {
      handleCheckout();
      setIsCartOpen(false);
    }, 8000);
  };

  return (
    <div className="app">
      <h1>Order Processing Application</h1>
      {message && <div className="message">{message}</div>}
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.name}>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>£{product.price.toFixed(2)}</p>
              <button
                    className="quantity-button minus"
                    onClick={() =>
                      cartItem && updateQuantity(product.name, cartItem.quantity - 1)
                    }
                    disabled={!cartItem}
                  >
                    -
                  </button>
              <input
                className="quantity-input"
                type="number"
                min="1"
                defaultValue="1"
                onChange={(e) =>
                  addToCart(product.name, parseInt(e.target.value))
                }
              />
              <button
                    className="quantity-button plus"
                    onClick={() =>
                      cartItem && updateQuantity(product.name, cartItem.quantity + 1)
                    }
                    disabled={!cartItem}
                  >
                    +
                  </button>
            </div>
            <button onClick={() => addToCart(product.name)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <button className="view-cart" onClick={() => setIsCartOpen(true)}>
        View Cart
      </button>

      <button className="simulate" onClick={handleSimulateClick}>
        Simulate
      </button>

      <Modal
        isOpen={isCartOpen}
        onRequestClose={() => setIsCartOpen(false)}
        contentLabel="Shopping Cart"
        className="cart-modal"
      >
        <h2>Your Shopping Cart</h2>
        <table>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="5">Your cart is empty</td>
              </tr>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.name}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              ))
            )}
          </tbody>
        </table>
        <div className="shipping-address">
          <h3>Shipping Address</h3>
          <textarea
            value={shippingAddress}
            onChange={handleAddressChange}
            rows="4"
            placeholder="Enter your shipping address"
          />
        </div>
        <div className="cart-footer">
          <button onClick={() => setIsCartOpen(false)}>Close</button>
          <button
            onClick={() => {
              setIsCartOpen(false);
              handleCheckout();
            }}
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      </Modal>

      {isCheckoutComplete && <Success />}
    </div>
  );
};

export default App;
