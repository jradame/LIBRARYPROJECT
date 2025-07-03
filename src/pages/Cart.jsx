import React from 'react';

const Cart = ({ cart, updateCart, removeFromCart }) => {
  const subtotal = cart.reduce(
    (total, item) => total + (item.salePrice || item.originalPrice) * item.quantity,
    0
  );
  const tax = +(subtotal * 0.1).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>

            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>

              <div className="cart__body">
                {cart.length === 0 ? (
                  <h2 className="cart__empty">Your cart is empty.</h2>
                ) : (
                  cart.map((item) => (
                    <div className="cart__item" key={item.id}>
                      <div className="cart__book">
                        <img src={item.url} alt={item.title} className="cart__book--img" />
                        <div className="cart__book--info">
                          <span className="cart__book--title">{item.title}</span>
                          <span className="cart__book--price">
                            ${item.salePrice || item.originalPrice}
                          </span>
                          <button className="cart__book--remove" onClick={() => removeFromCart(item.id)}>
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={1}
                          max={99}
                          className="cart__input"
                          value={item.quantity}
                          onChange={(e) => updateCart(item.id, +e.target.value)}
                        />
                      </div>

                      <div className="cart__total">
                        ${(item.salePrice || item.originalPrice) * item.quantity}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub--total">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${tax}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <button
                  className="btn btn__checkout"
                  onClick={() => alert('Checkout coming soon!')}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
