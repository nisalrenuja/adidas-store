import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="bg-black text-white px-2">Popular</span> Products
        </h2>
        <p className="text-slate-gray font-montserrat text-lg lg:max-w-lg mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
          pellentesque amet ullamcorper gravida.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
