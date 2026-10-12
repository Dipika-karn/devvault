export default function TrustedBy() {
  const technologies = [
    {
      name: "tailwind",
      logo: "/logos/tailwind.svg",
    },
    {
      name: "notion",
      logo: "/logos/notion.svg",
    },
    {
      name: "nextjs",
      logo: "/logos/nextjs.svg",
    },
    {
      name: "microsoft",
      logo: "/logos/mm.png",
    },
    {
      name: "GitHub",
      logo: "/logos/github.svg",
    },
  ];

  return (
    <section className="mt-8 border-y border-(--border)">
      
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 xl:px-12">

        {/* Section Heading */}
        <div className="text-center">
          <p className="text-lg font-medium text-(--text-muted) sm:text-xl lg:text-2xl">
            Built for the tools developers already use
          </p>
        </div>

        {/* Logo Area */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:mt-8 sm:gap-x-10 md:gap-x-14 lg:justify-between lg:gap-x-16 xl:gap-x-20">

          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="flex items-center"
            >
              <img
                src={technology.logo}
                alt={`${technology.name} logo`}
                className="h-auto w-20 opacity-70 sm:w-24 md:w-28 lg:w-32 bg-white rounded-full"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}