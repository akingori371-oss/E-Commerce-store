
import { useCart } from "./cart";
import ProductCard from "./products";

function Products() {
  const { cartItems } = useCart();

  return (
    <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">

      {cartItems.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}

export default Products;