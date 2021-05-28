import Container from "@/components/Container";
import { weddingVideoCards } from "@/lib/cardData";

const Weddings = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="font-extralight text-3xl sm:text-5xl lg:text-6xl">
          Wedding Films
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {weddingVideoCards.map((video, i) => {
            return (
              <div key={i}>
                <h2 className="sm:text-3xl lg:text-4xl font-extralight mb-2">
                  {video.name}
                </h2>
                <div className="card-zoom aspect-w-16 aspect-h-9">
                  <video controls>
                    <source src={video.videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Weddings;
