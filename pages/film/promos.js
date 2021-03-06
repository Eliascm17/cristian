import Container from "@/components/Container";
import { promoVideoCards } from "@/lib/cardData";

const Weddings = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-6xl">
          Promo Films
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {promoVideoCards.map((video, i) => {
            return (
              <div key={i}>
                <h2 className="text-3xl lg:text-4xl font-extralight mb-2">
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
