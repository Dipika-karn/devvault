const ProcessCard = ({ number, icon: Icon, title, description }) => {
  return (
    <div
      className="
        relative
        flex
        min-h-44
        w-full
        flex-1
        items-center
        gap-5
        rounded-2xl
        border
        border-(--border)
        bg-(--card)
        px-5
        py-6
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-(--border-focus)
        hover:shadow-(--shadow-soft)

        sm:px-6
        sm:py-7
      "
    >
      {/* Step Number */}
      <div
        className="
          absolute
          left-4
          top-4
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-(--primary)
          text-sm
          font-bold
          text-white
          shadow-[0_0_20px_rgba(124,58,237,0.35)]

          sm:left-5
          sm:top-5
          sm:h-10
          sm:w-10
        "
      >
        {number}
      </div>

      {/* Icon */}
      <div
        className="
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[rgba(124,58,237,0.12)]
          text-(--primary-light)
          sm:h-18
          sm:w-18
        "
      >
        <Icon
          size={32}
          strokeWidth={1.8}
        />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h3
          className="
            text-lg
            font-semibold
            text-(--text)
            sm:text-xl
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            max-w-md
            text-sm
            leading-6
            text-(--text-secondary)
            sm:text-[15px]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;