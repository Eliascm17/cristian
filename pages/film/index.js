import Container from "@/components/Container";
import { videoCards } from "@/lib/cardData";

const index = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          Films
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {videoCards &&
            videoCards.map((video, i) => {
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
