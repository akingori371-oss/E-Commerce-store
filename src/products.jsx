

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-56 w-full rounded-lg object-cover"
      />

      <h2 className="mt-4 text-lg font-semibold">
        {product.title}
      </h2>

      <p className="mt-2 text-gray-600">
        ${product.price}
      </p>

      <div className="mt-4 flex gap-2">
        <Link
          to={`/products/${product.id}`}
          className="rounded-lg border px-4 py-2"
        >
          View
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;