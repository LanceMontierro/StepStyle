import { shopBrands } from "../Constants";

const Brands = () => {
  return (
    <section className="relative px-[25px] mt-20 max-w-[1296px] mx-auto">
      <div className="flex items-center gap-5 justify-center max-[768px]:flex-col ">
        {shopBrands.map((brand, i) => (
          <button
            className="h-[370px] w-[350px] relative group overflow-hidden max-[768px]:w-full"
            key={i}
          >
            <img
              src={brand.brand}
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-titlexl font-semibold absolute bottom-5 w-full text-center font-Ubuntu  opacity-80 text-gray-300  ">
              {brand.text}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Brands;
