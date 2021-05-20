import Link from "next/link";
import Container from "@/components/Container";

const photoCards = [
  {
    imgPath: "/collections/photos/personal/Caleb/Caleb-8.jpg",
    name: "Caleb",
    query: "Caleb",
  },
  {
    imgPath: "/collections/photos/personal/Missy/Missy-52.jpg",
    name: "Missy",
    query: "Missy",
  },
  {
    imgPath: "/collections/photos/personal/Misc/sideline-37.jpg",
    name: "Misc",
    query: "Misc",
  },
];

const index = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          Personal Shoots
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photoCards.map((pic, i) => {
            return (
              <Link
                href={{
                  pathname: "/photos/personal/[slug]",
                  query: { slug: pic.name },
                }}
              >
                <div className="card-zoom aspect-w-2 aspect-h-3" key={i}>
                  <img
                    src={pic.imgPath}
                    loading="lazy"
                    className="card-zoom-image object-fill"
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
