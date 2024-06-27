import { useState, createContext } from "react";
import { scrollTotop } from "../utils/utils";
export const myContext = createContext();

const ThemeProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [cartNum, setCartNum] = useState(0);

  const itemSelected = (item) => {
    setSelectedItem(item);
  };

  const removeFromCart = (index) => {
    setCartItem(cartItem.filter((_, i) => i !== index));
    setCartNum(cartNum - 1);
  };

  const goToItemDetails = (shoe) => {
    scrollTotop();
    itemSelected(shoe);
  };

  return (
    <myContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
        itemSelected,
        cartItem,
        setCartItem,
        cartNum,
        setCartNum,
        removeFromCart,
        goToItemDetails,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default ThemeProvider;
