# Order Processing Application

## Motivation

Another interview required a 2-hour technical test. I developed an order processing application using ReactJS to meet the following requirements:

1. Create an Order
2. Update Order
3. List of Orders

The application includes a cart system and a dummy checkout screen to demonstrate payment processing. At checkout, it captures the shipping address. The implementation showcases:

- Modular programming
- React components
- Usage of hooks where necessary
- Backend integration where possible

## Features

- Add items to the cart with a specific quantity
- Modify quantity using an input field (no add button)
- Show cart with options to update or remove items
- Checkout screen with address input
- Checkout button is disabled if the cart is empty
- Success message after checkout
- Simulation button to automate the process:
  - Add 3 apples and 5 bananas
  - Open the cart
  - Remove apples and reduce bananas to 2
  - Change the shipping address
  - Complete checkout

## How to Run

1. Install dependencies:
   ```
   npm install
   ```
2. Start the application
   ```
   npm start
   ```
