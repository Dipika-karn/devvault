import {
  Bookmark,
  Folder,
  Search,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

import ProcessCard from "./ProcessCard";

const steps = [
  {
    number: 1,
    title: "Save",
    description: "Save any resource with a single click or extension.",
    icon: Bookmark,
  },
  {
    number: 2,
    title: "Organize",
    description: "Add to collections, tag it and add your notes.",
    icon: Folder,
  },
  {
    number: 3,
    title: "Find Anytime",
    description: "Search and access your resources from anywhere.",
    icon: Search,
  },
];

const HowItWorks = () => {
  return (
    <section className=" w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-4 xl:px-10 ">
      <div className="w-full ">

        {/* =========================
            Section Header
        ========================== */}

        <div className="mb-10 text-center sm:mb-12 lg:mb-14">

          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-(--border)
              bg-(--primary-bg)
              px-4
              py-1.5
              text-xs
              font-medium
              text-(--primary-light)

              sm:text-sm
            "
          >
            Simple Process
          </span>

          {/* Heading */}
          <h2
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-(--text)

              sm:text-3xl

              lg:text-4xl

              xl:text-5xl
            "
          >
            How DevVault{" "}
            <span className="
                bg-linear-to-r
                from-(--primary-light)
                to-(--primary-hover)
                bg-clip-text
                text-transparent
              "
            >
              Works
            </span>
          </h2>

        </div>

        {/* =========================
            Process Area
        ========================== */}

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-5

            md:gap-6

            lg:flex-row
            lg:items-stretch
            lg:gap-4
          "
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="
                flex
                w-full
                flex-col
                items-center

                lg:flex-row
                lg:items-center
                lg:gap-4
              "
            >
              {/* Process Card */}
              <ProcessCard
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />

              {/* Arrow */}
              {index < steps.length - 1 && (
                <>
                  {/* Mobile / Tablet Arrow */}
                  <ArrowDown
                    size={24}
                    strokeWidth={1.8}
                    className="
                      shrink-0
                      text-(--primary-light)

                      lg:hidden
                    "
                  />

                  {/* Desktop Arrow */}
                  <ArrowRight
                    size={28}
                    strokeWidth={1.8}
                    className="
                      hidden
                      shrink-0
                      text-(--primary-light)

                      lg:block
                    "
                  />
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;