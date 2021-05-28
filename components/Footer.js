const ExternalLink = ({ children, href, alt, newTab = false }) => {
  return (
    <a
      className="text-gray-400 hover:text-gray-500 text-md transition ease-in-out duration-200"
      href={href}
      alt={alt}
      target={newTab === true ? "_blank" : ""}
    >
      {children}
    </a>
  );
};

const Footer = () => (
  <footer className="flex flex-col w-full items-start justify-center max-w-7xl mx-auto space-y-4 mb-12 px-6 md:px-8">
    <hr className="w-full border-1 border-gray-400 dark:border-gray-500 mb-6" />
    <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ExternalLink
        href="https://instagram.com/cris.villl?igshid=1imnw52l6uv64"
        alt="instagram"
        newTab={true}
      >
        Instagram
      </ExternalLink>
      <ExternalLink
        href="https://vimeo.com/user125819980"
        alt="linkedin"
        newTab={true}
      >
        Vimeo
      </ExternalLink>
      <ExternalLink href="/photos" alt="photos">
        Photos
      </ExternalLink>
      <ExternalLink href="/film" alt="film">
        Film
      </ExternalLink>
      <ExternalLink href="/contact" alt="contact">
        Contact
      </ExternalLink>
      <ExternalLink href="https://eliasm.dev" alt="Elias" newTab={true}>
        Made by Elias
      </ExternalLink>
    </div>
  </footer>
);

export default Footer;
