import React from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "./login";
import { CartProvider } from "./cart";

function DisplayNavbar() {

    return(
        <>
        <h1>Welcome to the store </h1>
        <Link to="/">Home</Link>
         <Link to="/products">Products</Link>
         <Link to="/cart">Cart</Link>
        </>
    )
}

export default DisplayNavbar 