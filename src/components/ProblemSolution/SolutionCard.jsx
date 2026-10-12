export default function SolutionCard() {

  // Solution benefits
  const benefits = [
    "Save resources once",
    "Organize your way",
    "Find resources instantly",
    "Keep everything in one place",
  ];

  return (
    <div className=" w-full rounded-2xl border border-(--border)  bg-(--background-secondary) p-5 shadow-lg sm:p-6 lg:p-8">

      {/* Heading */}
      <h2 className=" text-2xl font-semibold text-(--text) sm:text-3xl">
        The Solution
      </h2>


      {/* Description */}
      <p
        className="
          mt-3
          max-w-md
          text-sm
          leading-relaxed
          text-(--text-secondary)
          sm:text-base
        "
      >
        DevVault brings everything together in one organized workspace.
      </p>


      {/* Benefits + Illustration */}
      <div className=" mt-5 flex flex-col gap-6 sm:flex-row sm:items-center">

        {/* Benefits */}
        <div className="flex-1 space-y-2">

          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="
                flex
                items-start
                gap-2
                text-sm
                leading-relaxed
                text-(--text-secondary)
                sm:text-base
              "
            >

              <span
                className="
                  mt-0.5
                  shrink-0
                  text-(--primary)
                "
              >
                ✓
              </span>

              <span>
                {benefit}
              </span>

            </div>
          ))}

        </div>


        {/* Solution Illustration */}
        <div className=" flex flex-1 justify-center sm:justify-end">

          <img
            src="/sol/folder.png"
            alt="DevVault organizing developer resources"
            className="
              w-full
              max-w-xs
              object-contain
              sm:max-w-sm
              lg:max-w-md
            "
          />

        </div>

      </div>

    </div>
  );
}