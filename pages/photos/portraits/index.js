import Link from "next/link";
import Container from "@/components/Container";

const photoCards = [
  {
    imgPath: "/collections/photos/portraits/Jess/Jess-3.jpg",
    name: "Jess",
    query: "Jess",
  },
  {
    imgPath:
      "/collections/photos/portraits/Julianna & Kaitlin/julesAndPalPics-13.jpg",
    name: "Julianna & Kaitlin",
    query: "Julianna & Kaitlin",
  },
];

const index = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          Portrait Shoots
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photoCards.map((pic, i) => {
            return (
              <Link
                href={{
                  pathname: "/photos/portraits/[slug]",
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
