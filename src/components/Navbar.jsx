
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";

const Navbar = () => {
  return (
    <nav className=" border-white/5 bg-[#0c0d0f] text-white">

      <div className="flex h-[72px]  items-center justify-between px-3">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src={logo}
            alt="FitLog Logo"
            width={26}
            height={26}
            priority
          />

          <span className="text-[15px] font-extrabold tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-1 sm:flex">

          <Link
            href="/"
            className="rounded-full bg-[#1b220d] px-4 py-2 text-xs font-semibold text-[#ccff00]"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-4 py-2 text-xs text-gray-400 transition hover:text-white"
          >
            My Plan
          </Link>

        </div>

        {/* Plan and Saved */}
        <div className="flex items-center gap-4 sm:gap-5">

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs text-gray-400 transition hover:text-white"
          >
            Plan

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ccff00] text-[9px] font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs text-gray-400 transition hover:text-white"
          >
            Saved

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-700 text-[9px] text-white">
              0
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
