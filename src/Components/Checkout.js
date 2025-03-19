import React from "react";

const Checkout = ({ submitOrder }) => {
    return (
        <div>
            <h2>Shipping Address</h2>
            <p>194A King Street, Sonar Informatics Ltd, Hammersmith and Fulham, London W6 0RA</p>
            <button className="btn-primary" onClick={submitOrder}>Confirm Order</button>
        </div>
    );
};

export default Checkout;
