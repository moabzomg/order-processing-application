import React from "react";

const productCategories = {
    Fruits: [
        { id: 1, title: "Apple", cost: 2.50 },
        { id: 2, title: "Banana", cost: 1.80 },
        { id: 3, title: "Orange", cost: 2.00 }
    ],
    Vegetables: [
        { id: 4, title: "Carrot", cost: 1.50 },
        { id: 5, title: "Tomato", cost: 2.20 },
        { id: 6, title: "Lettuce", cost: 1.00 }
    ],
    Meat: [
        { id: 7, title: "Chicken Breast", cost: 5.00 },
        { id: 8, title: "Beef Steak", cost: 7.00 },
        { id: 9, title: "Pork Chop", cost: 4.50 }
    ]
};

const AddItems = ({ addToCart, category }) => {
    const products = productCategories[category] || [];

    return (
        <div>
            <h2>{category}</h2>
            {products.map(product => (
                <div key={product.id} className="cart-item">
                    <span>{product.title} - ${product.cost.toFixed(2)}</span>
                    <button className="btn-primary" onClick={() => addToCart(product)}>Add</button>
                </div>
            ))}
        </div>
    );
};

export default AddItems;
