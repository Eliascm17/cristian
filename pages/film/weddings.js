import Container from "@/components/Container";

const videoCards = [
  {
    videoPath:
      "https://player.vimeo.com/external/472060445.hd.mp4?s=efd46b42e7778c97d98d6a6b4a01841698c12ae6&profile_id=174",
    name: "Jack & McKenzie",
  },
  {
    videoPath:
      "https://player.vimeo.com/external/492950621.hd.mp4?s=c3a9ab5b77d1383ecec331ed365ae245180ee6a6&profile_id=174",
    name: "Jack & Shaela",
  },
  {
    videoPath:
      "https://player.vimeo.com/external/482496609.hd.mp4?s=18ec78a6fbc1df825c957628154d74bc2e2aab7d&profile_id=174#t=1",
    name: "Micah & Alex",
  },
];

const Weddings = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-6xl">
          Wedding Films
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {videoCards.map((video, i) => {
            return (
              <>
                <h2 className="text-3xl lg:text-4xl font-extralight">
                  {video.name}
                </h2>
                <div className="card-zoom aspect-w-16 aspect-h-9" key={i}>
                  <video controls>
                    <source src={video.videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* <h1 className="hidden md:block md:card-zoom-text">
                    {video.name}
                  </h1> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Weddings;
