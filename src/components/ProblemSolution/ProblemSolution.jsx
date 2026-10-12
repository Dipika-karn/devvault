import { ArrowRight, ArrowDown } from "lucide-react";
import ProblemCard from "./ProblemCard";
import SolutionCard from "./SolutionCard";

export default function ProblemSolution() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">

      <div
        className=" flex w-full flex-col gap-6 px-4 sm:px-6 md:px-8 lg:flex-row lg:items-stretch lg:justify-between lg:px-10  xl:px-12  2xl:px-16">

        {/* Problem Card */}
        <div className="w-full lg:w-[46%]">
          <ProblemCard />
        </div>


        {/* Arrow */}
        <div className="flex shrink-0 items-center justify-center">

          <ArrowRight
            size={30}
            className="hidden text-(--primary) lg:block"
          />

          <ArrowDown
            size={30}
            className="text-(--primary) lg:hidden"
          />

        </div>


        {/* Solution Card */}
        <div className="w-full lg:w-[46%]">
          <SolutionCard />
        </div>

      </div>

    </section>
  );
}