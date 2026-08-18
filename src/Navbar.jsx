import React from "react";
import { Link } from "react-router-dom";

function DisplayNavbar() {
  return (
    <nav className="flex items-center justify-between bg-black px-8 py-5 text-white shadow-md">
      
      <h1 className="text-2xl font-bold">
        Welcome to the Store
      </h1>

      <div className="flex gap-6">
        <Link
          to="/"
          className="transition hover:text-gray-400"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="transition hover:text-gray-400"
        >
          Products
        </Link>
      </div>

    </nav>
  );
}

export default DisplayNavbar;