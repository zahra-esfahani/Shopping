import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { useCart } from "../Context/CartContext";
import styles from "./Layout.module.css";
function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shopping</Link>

        <Link to="/checkout">
          <div>
            <PiShoppingCartBold />
            {!!state.counterItems && <span>{state.counterItems}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed Nicely</p>
      </footer>
    </>
  );
}

export default Layout;
