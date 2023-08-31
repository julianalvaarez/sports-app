import { ProductsList } from "../components";
import { FirstView } from "../components/FirstView";
import { Info } from "../components/Info";
import { NavBar } from "../components/NavBar";
import { products } from "../data";

export const HomePage = () => {

  return (
    <div className="mt-32">
      <NavBar />
      <FirstView />
      <Info />
      <ProductsList products={products} />
    </div>
  );
};
