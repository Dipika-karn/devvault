import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "DevVault has completely changed how I organize my learning resources. I never lose useful links anymore!",
    name: "Sarah Chen",
    role: "Frontend Developer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    quote:
      "The search and tagging features are incredible. I can find everything I need in seconds.",
    name: "Alex Johnson",
    role: "Full Stack Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    quote:
      "Finally, a tool made specifically for developers to organize developer resources. Love it!",
    name: "Priya Sharma",
    role: "Backend Developer",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      className="
        w-full
        px-4
        py-16

        sm:px-6
        sm:py-20

        lg:px-8
        lg:py-24

        xl:px-10
      "
    >
      <div className="w-full">

        {/* =================================
            Section Header
        ================================== */}

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
            Loved by Developers
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
            What{" "}
            <span
              className="
                bg-linear-to-r
                from-(--primary-light)
                to-(--primary-hover)
                bg-clip-text
                text-transparent
              "
            >
              Developers
            </span>{" "}
            Say
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-(--text-muted)

              sm:text-base
            "
          >
            See how developers use DevVault to organize their resources,
            improve their workflow, and stay focused.
          </p>
        </div>

        {/* =================================
            Testimonials Grid
        ================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-5

            md:grid-cols-2
            md:gap-6

            lg:grid-cols-3
          "
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>


        
      </div>
    </section>
  );
};

export default Testimonials;