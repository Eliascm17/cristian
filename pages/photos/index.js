import Container from "@/components/Container";
import { getPhotos } from "lib/dataFetcher";
import Image from "next/image";

const photoCards = [
  {
    path: "/collections/photos/fashion/shoot-1/Promos-02.jpg",
    name: "Fashion",
  },
  {
    path: "/collections/photos/personal/Misc/sideline-45.jpg",
    name: "Personal",
  },
  {
    path: "/collections/photos/wedding/Aliza & Chris/wedding-18.jpg",
    name: "Wedding",
  },
  {
    path: "/collections/photos/portraits/Julianna and Kaitlyn/julesAndPalPics-02.jpg",
    name: "Portraits",
  },
  {
    path: "/collections/photos/promos/Honey & Fig/DSC03671.jpg",
    name: "Promos",
  },
];

const index = ({}) => {
  return (
    <Container>
      <h1 className="text-3xl md:text-4xl text-gray-900 font-bold mb-6 md:mb-10">
        Photo Shoots
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photoCards.map((pic, i) => {
          return (
            <div className="aspect-h-8 aspect-w-5 photo-cards-hover" key={i}>
              <h1 className="z-30 text-white text-4xl font-semibold self-center">
                {pic.name}
              </h1>
              <Image src={pic.path} layout="fill" objectFit="cover" />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const photos = await getPhotos("public/collections/photos");

  return {
    props: {
      photos,
    },
  };
}

export default index;
