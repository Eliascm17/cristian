import Link from "next/link";
import Container from "@/components/Container";

const photoCards = [
  {
    imgPath: "/collections/photos/wedding/Aliza & Chris/wedding-18.jpg",
    name: "Aliza & Chris",
    query: "Aliza & Chris",
  },
];

const index = ({}) => {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          Wedding Shoots
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photoCards.map((pic, i) => {
            return (
              <Link
                href={{
                  pathname: "/photos/weddings/[slug]",
                  query: { slug: pic.name },
                }}
              >
                <div className="card-zoom aspect-w-2 aspect-h-3" key={i}>
                  <img
                    src={pic.imgPath}
                    loading="lazy"
                    className="card-zoom-image"
                  />
                  <h1 className="card-zoom-text">{pic.name}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default index;
