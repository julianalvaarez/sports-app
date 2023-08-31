import { ProductCard } from "./";

export const ProductsList = ({products}) => {
  return (
    <>
      <div id="view" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 2xl:grid-cols-4 font-sans">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
