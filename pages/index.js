import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-start w-full mx-auto max-w-6xl">
        <div className="aspect-w-16 aspect-h-9 mt-4">
          <p className="z-10 absolute text-black font-bold md:text-2xl mt-10 ml-4">
            Hey, I'm Cristian and I make your memories last forever
          </p>
          <iframe
            src="https://player.vimeo.com/video/472060445?autoplay=1&loop=1&autopause=0&controls=0&loop=1&autopause=0&muted=1"
            width="900"
            height="500"
            frameborder="0"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
