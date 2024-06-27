import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { myContext } from "../provider/Provider";
import { navItems } from "../Constants";
import { GrPowerReset } from "react-icons/gr";
import { VscSettings } from "react-icons/vsc";

const Products = ({ Products, title }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileFilter, setMobileFilter] = useState(false);
  const { goToItemDetails } = useContext(myContext);

  useEffect(() => {
    setActiveFilter("All");
  }, [title]);

  const filteredProducts = () => {
    return Products.filter(
      (product) =>
        product.category &&
        product.category.includes(title) &&
        (activeFilter === "All" || product.productFilter.includes(activeFilter))
    );
  };

  const productsToDisplay = filteredProducts();

  const getNavItems = () => {
    const category = navItems.find((navItem) => navItem.title === title);
    return category ? category.items : [];
  };

  const navSubItems = getNavItems();

  const handleFilterChange = (title) => {
    setActiveFilter(title);
    setMobileFilter(false);
  };

  const handleMobileFilter = () => {
    setMobileFilter(!mobileFilter);
  };

  const resetFiltered = () => {
    setActiveFilter("All");
    setMobileFilter(false);
  };

  return (
    <>
      <Nav />
      <section className="relative px-[25px] mt-24 max-w-[1900px] mx-auto overflow-hidden flex flex-col">
        <div className="pt-12 mb-8 mx-auto px-[25px] w-full">
          <h1 className="text-titlelg font-medium max-[996px]:text-center font-Ubuntu ">
            {title} ({productsToDisplay.length})
          </h1>
        </div>

        <section className="flex mb-[20px] flex-col max-[943px]:mt-4 w-full">
          {productsToDisplay.length === 0 ? (
            <div className="text-center text-titlelg w-full mx-auto">
              No Products Available
            </div>
          ) : (
            <div className="productsGrid max-[995px]:productsGridSm">
              {/* Small Screen Filtering Products */}
              <div className="w-full max-[995px]:flex hidden mx-auto mb-12 ">
                <button
                  className="w-full px-[25px] py-5 bg-[#1a1a1a] relative text-whitish flexCenter text-titlemd mx-auto"
                  onClick={handleMobileFilter}
                >
                  Filter
                  <VscSettings className="text-[25px] ml-3" />
                </button>
                <div
                  className={`${
                    mobileFilter
                      ? "max-h-[650px] py-[25px] px-[25px]"
                      : "max-h-0 px-[25px]"
                  } bg-[#1a1a1a] text-whitish absolute right-[25px] left-[25px] z-[100] duration-300 ease-in-out overflow-hidden`}
                >
                  <ul className="flex flex-col gap-4">
                    {navSubItems.map((item, i) => (
                      <li
                        key={i}
                        className={`cursor-pointer text-textxl ${
                          activeFilter === item ? "opacity-100" : "opacity-70"
                        }`}
                        onClick={() => handleFilterChange(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    className="bg-green-500 p-[10px] px-[15px] text-textxs mt-[20px] flex items-center rounded-md border-0 duration-300 ease-in-out hover:bg-green-700"
                    onClick={resetFiltered}
                  >
                    <GrPowerReset className="mr-[3px]" />
                    Reset
                  </button>
                </div>
              </div>

              {/* Large Screen Filtering Products */}
              <aside className="w-full max-[995px]:hidden bg-grayish">
                <div className="py-[25px] px-[25px]">
                  <ul className="flex flex-col gap-4">
                    {navSubItems.map((item, i) => (
                      <li
                        key={i}
                        className={`cursor-pointer text-textlg ${
                          activeFilter === item ? "opacity-100" : "opacity-70"
                        }`}
                        onClick={() => handleFilterChange(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="bg-green-500 p-[10px] px-[15px] text-textxs mt-[20px] flex items-center rounded-md border-0 duration-300 ease-in-out hover:bg-green-700"
                    onClick={resetFiltered}
                  >
                    <GrPowerReset className="mr-[3px]" />
                    Reset
                  </button>
                </div>
              </aside>
              <div className="grid grid-cols-3 gap-y-[20px] gap-x-[3%] max-[639px]:grid-cols-2 mx-auto max-w-[1300px] w-full max-[447px]:grid-cols-1">
                {productsToDisplay.map((product, i) => (
                  <div key={i}>
                    <Link
                      to={`/${product.name.replace(/\s+/g, "-").toLowerCase()}`}
                      onClick={() => {
                        goToItemDetails(product);
                      }}
                    >
                      <figure className="max-[447px]:flexCenter w-full">
                        <img src={product.img} alt={product.name} />
                      </figure>
                      <div className="py-5 max-[447px]:text-center">
                        {product.sale && (
                          <p className=" text-red-700 font-medium">Sale</p>
                        )}
                        {product.new && (
                          <p className=" text-red-700 font-medium">Just in</p>
                        )}
                        <h2 className="font-medium text-textmd leading-[1.5]">
                          {product.name}
                        </h2>
                        <p className="text-[#707072] text-textsm mb-2">
                          {product.type}
                        </p>

                        {product.salePrice ? (
                          <>
                            <p className="line-through text-[#707072]">
                              {product.price}
                            </p>
                            <p className="font-medium text-red-700">
                              {product.salePrice}
                            </p>
                          </>
                        ) : (
                          <p className="">{product.price}</p>
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Products;
