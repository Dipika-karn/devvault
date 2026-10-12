export default function ProblemCard() {

  // Problem statements
  const problemPoints = [
    "Too many browser tabs",
    "Hard to find resources later",
    "Bookmarks become messy",
    "Useful resources get forgotten",
  ];

  return (
    <div
      className="
        w-full
        rounded-2xl
        border border-(--border)
        bg-(--background-secondary)
        p-5
        shadow-lg
        sm:p-6
        lg:p-8
      "
    >

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-(--text) sm:text-3xl">
        The Problem
      </h2>


      {/* Description */}
      <p className="mt-3 max-w-md text-sm leading-relaxed text-(--text-secondary) sm:text-base">
        Developer resources are scattered everywhere.
      </p>


      {/* Problem List + Person Illustration */}
      <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-center">

        {/* Problem List */}
        <div className="flex-1 space-y-2">

          {problemPoints.map((point) => (
            <div
              key={point}
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
              <span className="mt-1 text-(--primary)">
                •
              </span>

              <span>
                {point}
              </span>

            </div>
          ))}

        </div>


        {/* Person Illustration */}
        <div className="flex flex-1 justify-center sm:justify-end">

          <img
            src="/problem/think.png"
            alt="Developer overwhelmed by scattered resources"
            className="
              w-full
              max-w-xs
              object-contain
              sm:max-w-sm
            "
          />

        </div>

      </div>

    </div>
  );
}