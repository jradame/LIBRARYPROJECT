import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books1";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  // Add book to cart
  function addToCart(book) {
    const existing = cart.find(item => +item.id === +book.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === existing.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  // Update quantity of book in cart
  function updateCart(id, quantity) {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  }

  // Remove book from cart
  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route
            path="/books/:id"
            render={() => (
              <BookInfo books={books} cart={cart} addToCart={addToCart} />
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <Cart
                cart={cart}
                updateCart={updateCart}
                removeFromCart={removeFromCart}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



