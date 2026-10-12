const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="
        group
        min-h-47.5
        rounded-md
        border
        border-(--border)
        bg-(--card)
        p-5

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-(--border-focus)
        hover:shadow-(--shadow-soft)
      "
    >
      {/* Icon */}
      <div
        className="
          mb-5
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-sm
          border
          border-(--primary)/20
          bg-(--primary-bg)

          transition-all
          duration-300

          group-hover:border-(--primary)/40
          group-hover:bg-(--primary)/20
        "
      >
        <Icon
          size={25}
          strokeWidth={1.8}
          className="
            text-(--primary-light)
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Title */}
      <h3
        className="
          mb-2
          text-sm
          font-semibold
          leading-snug
          text-(--text)
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-xs
          leading-relaxed
          text-(--text-muted)
        "
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;