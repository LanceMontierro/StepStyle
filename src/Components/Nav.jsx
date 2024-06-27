import { navItems, SearchFilter } from "../Constants";
import { CiMenuFries } from "react-icons/ci";
import { useState, useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { myContext } from "../provider/Provider";
import { scrollTotop } from "../utils/utils";
import { Logo } from "../assets";
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { cartNum, itemSelected } = useContext(myContext);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    document.body.style.overflow = openMenu ? "" : "hidden";
  };

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const searchTerm = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filteredResults = SearchFilter.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [search]);

  const ItemDetails = (shoe) => {
    scrollTotop();
    setOpenSearch(false);
    setSearch("");
    itemSelected(shoe);
  };

  const cleanUpSearch = () => {
    setOpenSearch(false);
    setSearch("");
  };

  const linkClicked = () => {
    document.body.style.overflow = "";
    setOpenMenu(false);
  };

  return (
    <>
      <header className="w-full py-4 min-[996px]:px-12 px-6 max-w-[1820px] border border-[#E2E8F0] fixed z-[100] top-0 bg-white">
        {openSearch && (
          <div className="relative h-screen w-full overflow-hidden">
            <div className="flexBetween w-full gap-4 ">
              <div className="block max-[995px]:hidden">
                <Link
                  to={"/"}
                  className="text-[23px] font-semibold text-[#0D0A0B] tracking-widest font-Ubuntu"
                >
                  STEPSTYLE
                </Link>
              </div>
              <div className="w-full flex relative">
                <LuSearch className="absolute left-3 top-3.5 flex items-center justify-center" />

                <input
                  type="text"
                  className="pl-8 w-full h-[44px] border bg-grayish text-textsm rounded-md  "
                  placeholder="Search"
                  onChange={searchTerm}
                />
              </div>
              <div className=" font-semibold text-textlg text-center cursor-pointer">
                <button onClick={cleanUpSearch}>
                  <p>Cancel</p>
                </button>
              </div>
            </div>
            {search && (
              <div className=" max-h-full max-[520px]:max-h-[600px] overflow-auto bg-white  mt-5 py-[10px] px-[15px]">
                <p className="font-bold text-textlg text-gray-800">
                  {searchResults.length} results
                </p>
                {searchResults.map((item, i) => (
                  <Link
                    to={`/${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                    key={i}
                    className="flex justify-between items-center px-[15px] py-[10px] max-[520px]:flex-wrap gap-3 max-[520px]:justify-center hover:bg-gray-300 duration-300 ease-in-out"
                    onClick={() => {
                      ItemDetails(item);
                    }}
                  >
                    <h3 className="text-textmd max-[520px]:order-2">
                      {item.name}
                    </h3>
                    <img
                      src={item.img}
                      className="max-w-[120px] max-[520px]:max-w-full "
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
        <nav className="flexBetween min-h-[40px] z-[100]">
          <div className="hidden text-textxl max-[995px]:block cursor-pointer">
            {openMenu ? (
              <AiOutlineClose onClick={toggleMenu} />
            ) : (
              <CiMenuFries onClick={toggleMenu} />
            )}
          </div>

          <div className="block">
            <Link
              to={"/"}
              className="text-[23px] font-semibold text-[#0D0A0B] tracking-widest font-Ubuntu flex items-center gap-2"
            >
              <img src={Logo} className="w-[50px] h-[50px]" alt="" />
              STEPSTYLE
            </Link>
          </div>

          <ul
            className={`flex flex-wrap mx-auto max-[995px]:responsive-menu ${
              openMenu ? "left-0 bg-grayish" : "left-[-100%]"
            }`}
          >
            {navItems.map((navItem, i) => (
              <Link
                to={navItem.link}
                key={i}
                onClick={linkClicked}
                className="pl-3 flexBetween cursor-pointer text-textmd hover:text-[#006340] duration-150 ease-in-out max-[995px]:text-titlelg max-[995px]:pt-6 relative"
              >
                {navItem.title}
                <IoIosArrowForward className="hidden max-[995px]:block text-textmd text-gray-500 mr-4" />
              </Link>
            ))}
          </ul>

          <div className="text-textlg flex items-center gap-3 relative cursor-pointer w-[10%] max-[468px]:w-[20%]">
            <div className="cursor-pointer text-[22px]">
              <LuSearch onClick={toggleSearch} />
            </div>
            <Link
              to={"/cart"}
              className="cursor-pointer text-[22px] flexCenter"
            >
              <BsBag className="relative" />
              <span className="absolute top-1 font-bold text-[13px] ">
                {cartNum}
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
