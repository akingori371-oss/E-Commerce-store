import products from "./products.json";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
      
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}

export default Products;