import Container from "@/components/Container";

const photoCards = [
  {
    imgPath: "/collections/photos/wedding/Aliza & Chris/wedding-18.jpg",
    name: "Wedding",
    path: "/photos/weddings",
  },
  {
    imgPath:
      "/collections/photos/portraits/Julianna & Kaitlin/julesAndPalPics-02.jpg",
    name: "Portraits",
    path: "/photos/portraits",
  },
  {
    imgPath: "/collections/photos/promos/Honey & Fig/DSC03671.jpg",
    name: "Promos",
    path: "/photos/promos",
  },
  {
    imgPath: "/collections/photos/fashion/shoot-1/Promos-02.jpg",
    name: "Fashion",
    path: "/photos/fashion",
  },
  {
    imgPath: "/collections/photos/personal/Misc/sideline-45.jpg",
    name: "Personal",
    path: "/photos/personal",
  },
];

const index = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          Photo Shoots
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photoCards.map((pic, i) => {
            return (
              <a href={pic.path}>
                <div className="card-zoom aspect-w-2 aspect-h-3" key={i}>
                  <img
                    src={pic.imgPath}
                    loading="lazy"
                    className="card-zoom-image"
                  />
                  <h1 className="card-zoom-text">{pic.name}</h1>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default index;
