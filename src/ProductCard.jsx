import { useCart } from "./cart";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">

      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-full rounded-lg object-cover"
      />

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

      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full rounded-lg bg-black px-4 py-2 text-white"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;