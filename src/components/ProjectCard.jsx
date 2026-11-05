function ProjectCard({ title, description, image, link }) {
  const Wrapper = link ? "a" : "div";
  const linkProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="relative group w-full max-w-lg h-64 rounded-lg overflow-hidden shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />

      <h2 className="absolute bottom-0 w-full text-white text-2xl font-bold text-center bg-black bg-opacity-50 p-2 transition-opacity duration-300 group-hover:opacity-0">
        {title}
      </h2>

      <p className="absolute inset-0 flex items-center justify-center w-full font-bold text-white text-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {description}
      </p>
    </Wrapper>
  );
}

export default ProjectCard;
