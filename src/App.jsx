import {
  Nav,
  Hero,
  ProductCarousel,
  Brands,
  Featured,
  Footer,
} from "./Components";
import { FaQuestionCircle } from "react-icons/fa";
import {
  recommendations,
  BestSellers,
  TrendingKicks,
  featured,
  womensSneakers,
  mensSneakers,
  Benefits,
} from "./Constants";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <ProductCarousel
        title={"Recommended For You"}
        icon={<FaQuestionCircle />}
        product={recommendations}
        SlidesToShow={5}
        SlidesToScroll={0}
        Show1200={5}
        Scroll1200={1}
        Show992={4}
        Scroll992={1}
        Show680={3}
        Scroll680={2}
        Show480={2}
        Scroll480={1}
      />
      <ProductCarousel
        title={"Best Sellers"}
        icon={<FaQuestionCircle />}
        product={BestSellers}
        SlidesToShow={5}
        SlidesToScroll={2}
        Show1200={5}
        Scroll1200={2}
        Show992={4}
        Scroll992={3}
        Show680={3}
        Scroll680={3}
        Show480={2}
        Scroll480={2}
      />
      <Brands />

      <ProductCarousel
        title={"Trending Sneakers"}
        icon={<FaQuestionCircle />}
        product={TrendingKicks}
        SlidesToShow={5}
        SlidesToScroll={5}
        Show1200={5}
        Scroll1200={5}
        Show992={4}
        Scroll992={3}
        Show680={3}
        Scroll680={3}
        Show480={2}
        Scroll480={2}
      />

      <Featured feature={featured} title={"Stylish Picks For You"} />

      <ProductCarousel
        title={"Top Womens SNKRS"}
        icon={<FaQuestionCircle />}
        product={womensSneakers}
        SlidesToShow={5}
        SlidesToScroll={5}
        Show1200={5}
        Scroll1200={5}
        Show992={4}
        Scroll992={3}
        Show680={3}
        Scroll680={3}
        Show480={2}
        Scroll480={2}
      />

      <ProductCarousel
        title={"Top Mens SNKRS"}
        icon={<FaQuestionCircle />}
        product={mensSneakers}
        SlidesToShow={5}
        SlidesToScroll={5}
        Show1200={5}
        Scroll1200={5}
        Show992={4}
        Scroll992={3}
        Show680={3}
        Scroll680={3}
        Show480={2}
        Scroll480={2}
      />

      <Featured
        feature={Benefits}
        title={"Become a Member and Shop with Exclusive Benefits! "}
      />

      <Footer />
    </>
  );
}

export default App;
