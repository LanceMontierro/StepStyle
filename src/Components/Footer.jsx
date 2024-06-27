import { CiGlobe } from "react-icons/ci";
import { footerSocial } from "../Constants";
const Footer = () => {
  return (
    <footer className="w-full max-w-[1296px] mx-auto relative overflow-hidden border-t border-gray-300 mt-14 px-[25px] py-7">
      <div className="flex items-center justify-between gap-12 max-[725px]:flex-col max-[725px]:gap-3  ">
        <div className="flex items-center gap-3">
          <CiGlobe className="text-[24px]" />
          <h3 className="text-titlesm text-black font-medium">Philippines</h3>
        </div>

        <div className="flex items-center max-[725px]:order-3">
          {footerSocial.map((social, i) => {
            const Icon = social.item;
            return (
              <button
                key={i}
                className="hover:scale-105 duration-200 ease-in-out"
              >
                <Icon className="text-[23px] mr-4" />
              </button>
            );
          })}
        </div>

        <ul className="max-[725px]:order-2">
          <li className="text-[14px] font-medium ">
            © {new Date().getFullYear()} StepStyle. All Rights Reserved.
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
