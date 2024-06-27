import { useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart } from "react-icons/ci";
import { myContext } from "../provider/Provider";

const Products = ({
  title,
  product,
  icon,
  SlidesToShow,
  SlidesToScroll,
  Show1200,
  Scroll1200,
  Show992,
  Scroll992,
  Show680,
  Scroll680,
  Show480,
  Scroll480,
  infinite,
}) => {
  const { goToItemDetails } = useContext(myContext);

  const settings = {
    dots: true,
    slidesToShow: SlidesToShow,
    slidesToScroll: SlidesToScroll,
    infinite: infinite,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Show1200,
          slidesToScroll: Scroll1200,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: Show992,
          slidesToScroll: Scroll992,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: Show680,
          slidesToScroll: Scroll680,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Show480,
          slidesToScroll: Scroll480,
        },
      },
    ],
  };

  return (
    <section className="relative px-[25px] mt-20 max-w-[1296px] mx-auto">
      <div>
        <div className="flex my-4 gap-2">
          <h2 className="text-textlg font-Ubuntu font-medium">{title}</h2>
          <button className="text-[22px]">{icon}</button>
        </div>
        <ul>
          <Slider {...settings}>
            {product.map((shoe, i) => (
              <li className="relative overflow-hidden cursor-pointer" key={i}>
                <Link
                  to={`/${shoe.name.replace(/\s+/g, "-").toLowerCase()}`}
                  className="flex flex-col items-center gap-2"
                  onClick={() => {
                    goToItemDetails(shoe);
                  }}
                >
                  <div className="flex w-[160px] h-[85px] max-w-full mx-auto justify-center relative">
                    <img src={shoe.img} alt={shoe.name} />
                    <CiHeart className="text-black z-[100] absolute right-0 text-[25px]" />
                  </div>
                  <div className="px-4">
                    <h3 className="text-textsm text-[#111111] font-semibold shoeName">
                      {shoe.name}
                    </h3>
                    <p className="text-[#707072] text-textsm">{shoe.type}</p>
                    <p className="text-[#111111] font-medium">{shoe.price}</p>
                  </div>
                </Link>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default Products;
