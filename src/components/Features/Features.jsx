import {
  Bookmark,
  Folder,
  Tag,
  Search,
  Heart,
  FileText,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    id: 1,
    title: "Save Any Resource",
    description:
      "Save docs, videos, repos, articles, snippets, and any developer resource.",
    icon: Bookmark,
  },
  {
    id: 2,
    title: "Collections",
    description:
      "Organize resources into collections and folders that make sense to you.",
    icon: Folder,
  },
  {
    id: 3,
    title: "Tags & Categories",
    description:
      "Use tags and categories to find exactly what you need, instantly.",
    icon: Tag,
  },
  {
    id: 4,
    title: "Powerful Search",
    description:
      "Lightning-fast search across all your resources and notes.",
    icon: Search,
  },
  {
    id: 5,
    title: "Favorites",
    description:
      "Mark important resources as favorites for quick access.",
    icon: Heart,
  },
  {
    id: 6,
    title: "Notes & Snippets",
    description:
      "Add your own notes and code snippets alongside your resources.",
    icon: FileText,
  },
];

const Features = () => {
  return (
    <section className="w-full py-15 sm:py-20 lg:py-5 border-y border-(--border) ">
      {/* Main Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 ">
        {/* Section Header */}
        <div
          className=" mb-10 flex flex-col items-center text-center sm:mb-12">
          {/* Badge */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              rounded-full
              border
              border-(--primary)/30
              bg-(--primary-bg)
              px-4
              py-1.5

              text-xl
              font-medium
              text-(--primary-light)

              shadow-[0_0_20px_rgba(124,58,237,0.12)]
            "
          >
            Powerful Features
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-3xl
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-(--text)

              sm:text-3xl

              lg:text-4xl
            "
          >
            Everything You Need to Stay{" "}
            <span
              className="
                bg-linear-to-r
                from-(--primary-light)
                to-(--primary-hover)
                bg-clip-text
                text-transparent
              "
            >
              Organized
            </span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;