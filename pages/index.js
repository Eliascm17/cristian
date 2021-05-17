import Container from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full">
        {/* <div className="flex items-center justify-center h-screen mb-12 overflow-hidden max-w-7xl">
        <div className="relative z-30 p-5 text-3xl text-white">
          Hey, I'm Cristian and I make your memories last forever
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-full min-w-full min-h-full max-w-none"
        >
          <source
            src="/collections/film/jack-and-mackenzie.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div> */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
            Featured
          </h1>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-6">
            <a href="/photos/promos">
              <div className="flex w-full mx-auto justify-start items-center aspect-w-2 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4 lg:aspect-w-4 lg:aspect-h-5 featured-hover">
                <h1 className="z-30 text-white text-4xl font-semibold">
                  Honey & Fig Promo
                </h1>
                <img
                  className="object-cover z-10"
                  src="/collections/photos/promos/honey-and-fig/gelato-1.jpg"
                />
              </div>
            </a>
            <a href="/photos/weddings">
              <div className="aspect-w-2 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4 lg:aspect-w-4 lg:aspect-h-5 featured-hover">
                <h1 className="z-30 text-white text-4xl font-semibold">
                  Chris and Aliza's Wedding
                </h1>
                <img
                  className="object-cover z-10"
                  src="/collections/photos/wedding/aliza-and-chris/wedding-12.jpg"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
{
  /* <iframe src="https://player.vimeo.com/video/472060445?color=ffffff&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */
}
{
  /* <p><a href="https://vimeo.com/472060445">Jack &amp; Mackenzie</a> from <a href="https://vimeo.com/user125819980">Cristian Villanueva</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */
}
{
  /* <div className="flex flex-col justify-start w-full mx-auto max-w-6xl">
  <section className="aspect-w-16 aspect-h-9 mt-4">
    <p className="z-10 absolute text-black font-bold md:text-2xl mt-10 ml-4">
      Hey, I'm Cristian and I make your memories last forever
    </p>
    <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
      Hey, I'm Cristian and I make your memories last forever
    </div>
    <div className="w-full bg-blue-500 absolute h-10"></div>
    <iframe
      src="/collections/film/jack-and-mackenzie.mp4"
      loading="lazy"
      width="900"
      height="500"
      frameborder="0"
      allow="autoplay"
    ></iframe>
    <iframe
      src="https://player.vimeo.com/video/472060445?autoplay=1&loop=1&autopause=0&controls=0&loop=1&autopause=0&muted=1"
      loading="lazy"
      width="900"
      height="500"
      frameborder="0"
      allow="autoplay"
    ></iframe>
    <div className="flex flex-col-reverse justify-around">
      <div className="w-full bg-blue-400 absolute h-7"></div>
      <div className="w-full bg-blue-500 absolute h-7"></div>
    </div>
  </section>
</div>; */
}
