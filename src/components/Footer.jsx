
import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0c0d0f] px-4 py-5">

      <div className="container mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 sm:flex-row">

        {/* Logo Section */}
        <div className="flex items-center gap-2">

          <Image
            src={logo}
            alt="FitLog Logo"
            width={26}
            height={20}
            priority
          />

          <span className="text-[15px] font-extrabold tracking-wide text-white">
            FITLOG
          </span>

        </div>

        {/* Copyright Section */}
        <p className="w-full text-center text-[12px] text-gray-400 sm:w-auto sm:text-right">
           All rights reserved by ACME Industries Ltd.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
