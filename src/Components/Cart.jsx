import Nav from "./Nav";
import Footer from "./Footer";
import { myContext } from "../provider/Provider";
import { useContext, useMemo, useState } from "react";
import { GoTrash } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { Gcash } from "../assets";
import { FaCcVisa } from "react-icons/fa";
const Cart = () => {
  const { cartItem, removeFromCart } = useContext(myContext);
  const [checkOut, setCheckOut] = useState(false);

  const subtotal = useMemo(() => {
    return cartItem.reduce((acc, item) => {
      const priceNumeric = parseFloat(
        item.salePrice
          ? item.salePrice.replace(/[^\d.-]+/g, "")
          : item.price.replace(/[^\d.-]+/g, "")
      );
      return acc + priceNumeric;
    }, 0);
  }, [cartItem]);

  const shippingFee = useMemo(() => (subtotal > 7000 ? 0 : 250), [subtotal]);

  const total = useMemo(() => subtotal + shippingFee, [subtotal, shippingFee]);

  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "PHP",
    });
  };

  const toggleCheckOut = () => {
    setCheckOut(!checkOut);
  };

  return (
    <>
      <Nav />
      <section className="relative px-[25px] mt-24 max-w-[1296px] mx-auto flex flex-col">
        <div className="pt-12 mb-4 mx-auto min-[996px]:w-[90%] w-full">
          <h1 className="text-titlexl font-medium max-[996px]:text-center font-Ubuntu">
            Bag
          </h1>
        </div>

        <div className="flex w-full max-[996px]:flex-col">
          <div className="w-[60%] flex min-[996px]:justify-between min-[996px]:items-start flex-col items-center max-[996px]:w-full">
            {cartItem.length === 0 ? (
              <p className="text-center">Your cart is empty.</p>
            ) : (
              cartItem.map((item, index) => (
                <div
                  key={index}
                  className="w-full py-9 mx-auto flex items-center gap-4 max-[521px]:flex-col"
                >
                  <figure className="max-[996px]:w-full">
                    <img
                      src={item.img}
                      className="w-full h-full"
                      alt={item.name}
                    />
                  </figure>
                  <div className="mt-4 max-[996px]:w-full max-[521px]:text-center">
                    <h2 className="text-textsm font-semibold">{item.name}</h2>
                    <p className="text-textxs my-2">{item.type}</p>
                    <p className="text-textxs my-2">
                      {item.salePrice ? item.salePrice : item.price}
                    </p>
                    <p className="text-[#707072]">Size: {item.size}</p>
                    <button
                      className="text-[22px] mt-3"
                      onClick={() => removeFromCart(index)}
                    >
                      <GoTrash />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {cartItem.length > 0 && (
            <div className="w-[40%] pt-12 flex flex-col max-[996px]:w-full">
              <h1 className="text-titlelg font-medium max-[996px]:text-center font-Ubuntu">
                Summary
              </h1>

              <div>
                <p className="text-textxs my-2">
                  Subtotal: {formatCurrency(subtotal)}
                </p>
              </div>
              <div className="flex justify-between w-[80%] mb-2 border-b border-[#707072] py-2 max-[995px]:w-full">
                <p>
                  Estimated Delivery & Handling :
                  <span
                    className={`${
                      subtotal > 7000 ? "text-green-700 font-medium" : ""
                    }`}
                  >
                    {" "}
                    {subtotal > 7000 ? "Free shipping" : "₱250.00"}
                  </span>
                </p>
              </div>

              <h1 className="mt-2 border-b border-[#707072] pb-2 w-[80%] max-[995px]:w-full">
                Total: {formatCurrency(total)}
              </h1>

              <button
                className="flexCenter font-semibold text-whitish bg-[#006340] px-4 py-3 w-[50%] mt-6 rounded-[30px] max-[995px]:w-full hover:scale-105 duration-300 ease-in-out"
                onClick={toggleCheckOut}
              >
                <span className="font-Ubuntu">Buy Now</span>
              </button>
            </div>
          )}
        </div>
      </section>
      {checkOut && (
        <div className="fixed z-[999] top-0 left-0 w-full h-full py-[2%] overflow-y-auto flexCenter bg-black bg-opacity-50">
          <form className="bg-white border border-gray-300 pt-[30px] px-[30px] pb-[40px] w-[90%] max-w-[600px] text-center rounded-lg shadow-lg">
            <div className="text-right pb-2">
              <button
                type="button"
                className="text-right cursor-pointer w-[24px] duration-300 ease-out text-[24px]"
                onClick={() => setCheckOut(false)}
              >
                <IoCloseOutline />
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            <div className="flex items-center flex-wrap gap-4">
              <input
                type="text"
                className="w-full py-[.75rem] px-4 mb-4 text-[#121212] border border-gray-600 rounded-[.5rem]"
                placeholder="Enter your Name"
                name="username"
                required
              />
              <input
                type="email"
                className="w-full py-[.75rem] px-4 mb-4 text-[#121212] border border-gray-600 rounded-[.5rem]"
                placeholder="Enter your Email"
                name="userEmail"
                required
              />
              <input
                type="text"
                className="w-full py-[.75rem] px-4 mb-4 text-[#121212] border border-gray-600 rounded-[.5rem]"
                placeholder="Enter your Address"
                required
              />
              <input
                type="date"
                className="w-full py-[.75rem] px-4 mb-4 text-[#121212] border border-gray-600 rounded-[.5rem]"
                placeholder="Enter your Date of Birth"
                required
              />
            </div>
            <div className="flex flex-col mt-6 gap-4 items-center">
              <h3 className="text-lg font-semibold">Pay With:</h3>
              <div className="flex items-center justify-center gap-6">
                <img
                  src={Gcash}
                  alt="Gcash"
                  className="w-[60px] h-[60px] cursor-pointer"
                />
                <p className="text-lg">OR</p>
                <FaCcVisa className="text-[60px] cursor-pointer" />
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Confirm Payment
            </button>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
