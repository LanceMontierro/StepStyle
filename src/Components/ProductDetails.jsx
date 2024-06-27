import Nav from "./Nav";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { myContext } from "../provider/Provider";
import { shoeSizes } from "../Constants";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const ProductDetails = () => {
  const { selectedItem, setCartNum, cartNum, setCartItem, cartItem } =
    useContext(myContext);

  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const tabProd = selectedItem.thumbnails;

  const tabItem = tabProd ? tabProd[slideIndex] : "";

  const handleTabClicked = (prod) => {
    if (tabProd) {
      setSlideIndex(tabProd.indexOf(prod));
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const toggleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const addToCart = () => {
    if (selectedSize) {
      setCartNum(cartNum + 1);
      setCartItem([...cartItem, { ...selectedItem, size: selectedSize }]);
      setSelectedSize(null);
    } else {
      toggleAlert();
    }
  };

  return (
    <>
      <Nav />
      <section className="relative px-[25px] mt-24 max-w-[1296px] mx-auto flex flex-col">
        <div className="pt-12 mb-4 mx-auto min-[996px]:w-[90%] w-full  ">
          <h1 className="text-titlelg font-medium max-[996px]:text-center font-Ubuntu ">
            {selectedItem.name}
          </h1>
          {selectedItem.salePrice && (
            <>
              <p className="text-red-700 font-medium text-textlg">Sale</p>
              <p className="line-through text-[#707072]">
                {selectedItem.price}
              </p>
            </>
          )}
          <p className="text-textlg font-semibold font-Ubuntu max-[996px]:text-center">
            {selectedItem.salePrice
              ? selectedItem.salePrice
              : selectedItem.price}
          </p>
        </div>

        <div className="w-full flex min-[996px]:justify-between min-[996px]:items-start flex-col min-[996px]:flex-row items-center">
          <div className="min-[996px]:w-[40%] w-full py-9 mx-auto">
            <figure>
              <img src={tabItem} className="w-full h-full" />
            </figure>
            <ul className="flex relative justify-center w-full mt-[25px] ">
              {selectedItem.thumbnails.map((item, index) => (
                <li
                  className="w-[50px] flex items-center h-[50px] bg-gray-300 rounded-sm mr-[12px] duration-300 ease-in-out border border-blue-500"
                  key={index}
                  onClick={() => handleTabClicked(item)}
                >
                  <img src={item} className="w-full h-full" />
                </li>
              ))}
            </ul>
          </div>

          <div className="min-[996px]:w-[50%] w-full py-9 mt-4 px-8 max-[996px]:py-0 max-[996px]:px-0 max-[996px]:mt-2">
            <h3>Select Size</h3>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {shoeSizes.map((size, i) => (
                <div
                  key={i}
                  className={`flexCenter bg-gray-100 shadow-sm h-[48px] cursor-pointer ${
                    selectedSize === size.size ? "border border-black" : ""
                  }`}
                  onClick={() => handleSizeClick(size.size)}
                >
                  {size.size}
                </div>
              ))}
            </div>

            {showAlert && (
              <Stack
                sx={{ width: "100%" }}
                spacing={2}
                className="mt-4 flexCenter"
              >
                <Alert variant="outlined" severity="error">
                  Please Select A Size
                </Alert>
              </Stack>
            )}

            <div className="mt-6 w-full">
              <button
                className="py-4 px-6 bg-black text-white w-full flexCenter rounded-[30px]"
                onClick={addToCart}
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
