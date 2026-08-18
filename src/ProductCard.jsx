import { useCart } from "./cart";
import { useState } from "react";

function ProductCard({ product }) {
    const [count , setCount] = useState(0);
    const [message , setMessage] = useState("");
  const { addToCart } = useCart();

  function addCart(){
    setCount(count + 1);
    setMessage(`${product.name} was added to the cart`);
  }

  function removeCart(){
    setCount(count - 1);
    setMessage(`${product.name} was removed from the cart`)
  }

  return (
<div className="rounded-xl border bg-white p-4 shadow-sm">
               
        <p>Cart items: {count}</p>
        <p>{message}</p>       
      

      <h2 className="mt-3 text-xl font-bold">
        {product.name}
      </h2>

      <p className="text-gray-500">
        {product.category}
      </p>

      <p className="mt-2 text-lg font-semibold">
        ${product.price}
      </p>

      <p className="mt-2 text-sm text-gray-600">
        {product.description}
      </p>
        <div className="flex flex-col gap-3">
      <button
        onClick={addCart}
        className="mt-4 w-full rounded-lg bg-black px-4 py-2 text-white"
      >
        Add to Cart
      </button>

      <button
       onClick={removeCart}
       className="mt-4 w-full rounded-lg bg-black px-4 py-2 text-white "
       >Remove from cart</button>
     </div>
    </div>
  );
}

export default ProductCard;