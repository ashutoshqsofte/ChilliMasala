import React, { useState } from 'react';
import './Page.css';

const Order = () => {
  const items = [
    { id: 1, name: 'Chicken Lollipop', price: 19.90, quantity: 1, img: '../images1/Chicken-Lollipop.jpeg' },
    { id: 2, name: 'Kadai Paneer', price: 28.00, quantity: 1, img: '../images1/Kadai-Paneer.jpeg' },
    { id: 3, name: 'Kesar Kulfi', price: 15.50, quantity: 1, img: '../images1/Kesar-Kulfi.jpeg' },
    { id: 4, name: 'Egg Curry', price: 28.00, quantity: 1, img: '../images1/Egg-Curry.jpeg' },
    { id: 5, name: 'Chicken Tikka Masala', price: 27.50, quantity: 1, img: '../images1/Chicken-Tikka.jpeg' },
    { id: 6, name: 'Shahi Paneer', price: 28.00, quantity: 1, img: '../images1/Shahi-Paneer.jpeg' },
    { id: 7, name: 'Paneer Pakora 6 Pakoras (Gf)', price: 16.50, quantity: 1, img: '../images1/Paneer-Pakora.jpg' },
    { id: 8, name: 'Vegetable Spring Rolls', price: 15.90, quantity: 1, img: '../images1/Veg-Spring-Roll.jpg' },
    { id: 9, name: 'Murgh Tikka (Gf)', price: 23.50, quantity: 1, img: '../images1/Murgh-Tikka.jpeg' },
    { id: 10, name: 'Virgin Mojito', price: 24.00, quantity: 1, img: '../images1/Virgin-Mojito.jpeg' },
    { id: 11, name: 'Sauvignon', price: 24.00, quantity: 1, img: '../images1/Sauvignon.jpeg' },
    { id: 12, name: 'Sweeti Lassi', price: 24.00, quantity: 1, img: '../images1/Sweet-Lassi.jpeg' },
    { id: 13, name: 'Mango Milkshake', price: 24.00, quantity: 1, img: '../images1/Mango-Milkshake.jpeg' },
    { id: 14, name: 'Carrot Halwa', price: 12.00, quantity: 1, img: '../images1/Gajar-Halwa.jpeg' },
    { id: 15, name: 'Ice Cream', price: 10.00, quantity: 1, img: '../images1/Ice-Cream.jpeg' },
    { id: 16, name: 'Gulab Jamun', price: 8.50, quantity: 1, img: '../images1/Gulab-Jamun.jpeg' },
  ];

  const [cartItems, setCartItems] = useState(items);
  const [deliveryType, setDeliveryType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const updateQuantity = (id, action) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
        };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <h2>Order Summary</h2>

      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="item-image" />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>{`$${item.price}`}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, 'decrease')}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 'increase')}>+</button>
                <button className="remove-btn">🗑️</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <div className="delivery-type">
          <h4>Delivery Type</h4>
          <label>
            <input
              type="radio"
              name="delivery"
              value="Delivery"
              onChange={(e) => setDeliveryType(e.target.value)}
            />
            Delivery
          </label>
          <label>
            <input
              type="radio"
              name="delivery"
              value="Pick Up"
              onChange={(e) => setDeliveryType(e.target.value)}
            />
            Pick Up
          </label>
          <label>
            <input
              type="radio"
              name="delivery"
              value="Eat In"
              onChange={(e) => setDeliveryType(e.target.value)}
            />
            Eat In
          </label>
          {deliveryType && <p>Selected Delivery Type: {deliveryType}</p>}
        </div>

        <div className="payment-method">
          <h4>Payment</h4>
          <label>
            <input
              type="radio"
              name="payment"
              value="Cash"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Card
          </label>
          {paymentMethod && <p>Selected Payment Method: {paymentMethod}</p>}
        </div>
      </div>

      <div className="total-section">
        <div className="subtotal">
          <span>Sub Total</span>
          <span>{`$${subTotal}`}</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>{`$${subTotal}`}</span>
        </div>
      </div>

      <button className="checkout-button">CHECK OUT</button>
    </div>
  );
};

export default Order;
