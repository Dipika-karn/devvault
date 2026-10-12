import { Star } from "lucide-react";

const TestimonialCard = ({
  quote,
  name,
  role,
  avatar,
  rating = 5,
}) => {
  return (
    <div
      className="
        flex
        min-h-52
        w-full
        flex-col
        justify-between
        rounded-2xl
        border
        border-(--border)
        bg-(--card)
        p-5
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-(--border-focus)
        hover:shadow-(--shadow-soft)

        sm:p-6
      "
    >
      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            size={16}
            strokeWidth={1.8}
            fill="currentColor"
            className="text-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p
        className="
          mt-4
          text-sm
          leading-6
          text-(--text-secondary)

          sm:text-[15px]
        "
      >
        "{quote}"
      </p>

      {/* Developer Info */}
      <div
        className="
          mt-6
          flex
          items-center
          gap-3
        "
      >
        {/* Avatar */}
        <img
          src={avatar}
          alt={name}
          className="
            h-11
            w-11
            shrink-0
            rounded-full
            border
            border-(--border-light)
            object-cover
          "
        />

        {/* Name + Role */}
        <div className="min-w-0">
          <h3
            className="
              truncate
              text-sm
              font-semibold
              text-(--text)
            "
          >
            {name}
          </h3>

          <p
            className="
              mt-0.5
              text-xs
              text-(--text-muted)
            "
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;