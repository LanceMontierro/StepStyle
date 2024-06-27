import { BannerLg, BannerSm } from "../assets";
import Banner from "./Banner";
const Hero = () => {
  return (
    <>
      <section className="relative py-6 px-[25px] mt-20 max-w-[1296px] mx-auto">
        <div className="block">
          <Banner img={BannerLg} src={BannerSm} minWidth={"768"} />
        </div>
        <figcaption className="text-center w-full min-[995px]:mt-9 mt-4 max-[600px]:text-start ">
          <div>
            <p className="mb-2 font-medium text-textlg">Nike Pegasus 41</p>
            <h3 className="uppercase font-bold min-[768px]:text-[3.75rem] text-titlexl font-Ubuntu tracking-[-2.3px]">
              Don't waste your energy
            </h3>
            <p className="mt-2 font-medium text-textmd">
              Run in Pegasus. Feel the responsive energy return of Air Zoom and
              all-new ReactX foam.
            </p>
          </div>
        </figcaption>
      </section>
    </>
  );
};

export default Hero;
