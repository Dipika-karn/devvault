import { Sparkles , ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroTrustPoints from "./HeroTrustPoints";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section>

      <div className="flex w-full flex-col gap-10 px-6 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 xl:px-16 2xl:px-20 mt-15">

        {/* Left Side */}
        <div>
          
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--primary-bg) px-4 py-2 text-sm text-(--primary-light)">
            <Sparkles size={14} />

            <span>
              One place for all your developer resources
            </span>
          </div>

            {/* Hero Heading */}
         <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-(--text) sm:text-5xl lg:text-6xl">
            One Place for
            <br />
            <span className="text-(--primary)">
            Every Developer Resource
            </span>
         </h1>

           {/* Hero Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-(--text-secondary) sm:text-lg">
            Save GitHub repositories, YouTube tutorials, documentation,
            articles, notes, and code snippets in one organized workspace.
          </p>

          {/* Hero CTA Buttons */}
           <div className="mt-8 flex flex-col gap-3 sm:flex-row">

             {/* Primary CTA */}
              <Link
               href="/signup"
               className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--primary) px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-(--primary-hover) active:bg-(--primary-active)"
             >
               Get Started
               <ArrowRight size={18} />
             </Link>

             {/* Secondary CTA */}
             <a
               href="#product-preview"
               className="inline-flex items-center justify-center rounded-lg border border-(--border-light) bg-(--card) px-6 py-3 font-semibold text-(--text) transition-colors duration-200 hover:bg-(--border)"
             >
               View Demo
             </a>

           </div>
           <HeroTrustPoints />

        </div>


        {/* Right Side */}
        <div className="w-full max-w-xl">
           <HeroDashboard />
        </div>

      </div>

    </section>
  );
}