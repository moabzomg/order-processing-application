import React from "react";

const CategoryDialog = ({ setCategory, closeDialog }) => {
    return (
        <div className="category-dialog">
            <div className="category-dialog-content">
                <h2>Select Category</h2>
                <button onClick={() => { setCategory("Fruits"); closeDialog(); }}>Fruits</button>
                <button onClick={() => { setCategory("Vegetables"); closeDialog(); }}>Vegetables</button>
                <button onClick={() => { setCategory("Meat"); closeDialog(); }}>Meat</button>
                <button onClick={closeDialog}>Close</button>
            </div>
        </div>
    );
};

export default CategoryDialog;
