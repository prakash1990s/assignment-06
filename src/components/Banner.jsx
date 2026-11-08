
import Image from "next/image";
import Link from "next/link";
import banner from '@/app/assets/banner.png'

export default function Banner() {
  return (
    <section >
      <div className=" relative flex min-h-[15px] items-center overflow-hidden border-[#25272d] bg-[#14161b] px-6 py-10 sm:px-11 sm:py-12 lg:min-h-[348px]">

        {/* Left Content */}
        <div className="relative z-10 w-full max-w-[400px]">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[1px] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="max-w-[500px] text-4xl font-black uppercase leading-[1.02] tracking-[-1.5px] text-white sm:text-5xl">
            Train with intent. Log every set.
          </h1>

          <p className="mt-4 max-w-[400px] text-[13px] leading-5 text-[#9ca3af]">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s
            work add up.
          </p>

          <Link
            href="#library"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-[#ccff00] px-5 py-2.5 text-[10px] font-extrabold uppercase text-black transition hover:bg-[#b7e600]"
          >
            Browse Workouts
          </Link>
        </div>

        {/* Right Workout Image */}
        <div className="pointer-events-none absolute inset-y-0 right-3 hidden w-[34%] items-center justify-center sm:flex lg:right-8">
            <Image
            src={banner}
            alt="Banner"
            width={340}
            height={340}
          />
        </div>
      </div>
      <div className="bg-black text-white text-left mx-0 py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">THE LIBRARY</h1>
        <p>Twelve lifts covering every major muscle group</p>
      </div>
    </section>
    
  );
}
