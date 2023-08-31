import { ProductsList } from "../components";
import { NavBar } from "../components/NavBar";
import { products as data } from "../data";
import { useFilterProducts } from "../hooks/useFilterProducts";

export const ProductsPage = () => {
  const {filterProducts, products} = useFilterProducts(data)

  return (
    <div  className="mt-32">
      <NavBar/>
      <div className="m-2">
        <span className="mr-3 font-semibold md:text-xl">Filtrar Por:</span>
        <select onChange={(e) => filterProducts(e.target.value)} className="bg-black text-white rounded-md p-2 font-semibold text-center px-4 mb-4 md:text-xl">
          <optgroup>
            <option value="">Todos</option>
            <option value="Remera">Remeras</option>
            <option value="Calzado">Calzados</option>
            <option value="Gorra">Gorra</option>
            <option value="Accesorio">Accesorio</option>
          </optgroup>
        </select>
      </div>
      <ProductsList products={products} />
    </div>
  );
};
