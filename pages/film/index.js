import Container from "@/components/Container";

const videoCards = [
  {
    videoPath:
      "https://player.vimeo.com/external/472060445.hd.mp4?s=efd46b42e7778c97d98d6a6b4a01841698c12ae6&profile_id=174",
    name: "Wedding",
    path: "/film/weddings",
  },
  {
    videoPath:
      "https://player.vimeo.com/external/502843576.hd.mp4?s=a130de06300a01e7a4522f4a3cd1501bb796a3fa&profile_id=174",
    name: "Promos",
    path: "/film/promos",
  },
];

const index = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          Films
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {videoCards.map((video, i) => {
            return (
              <>
                <h2 className="text-3xl font-extralight md:hidden">
                  {video.name}
                </h2>
                <a href={video.path}>
                  <div className="card-zoom aspect-w-16 aspect-h-9" key={i}>
                    <video autoPlay loop muted className="md:card-zoom-image">
                      <source src={video.videoPath} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <h1 className="hidden md:block md:card-zoom-text">
                      {video.name}
                    </h1>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default index;
