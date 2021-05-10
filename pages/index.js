import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="h-240 w-full">
        <video width="320" height="240" autoplay loop muted>
          <source src="https://vimeo.com/472060445" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video element.
        </video>
      </div>
      <div></div>
      <div></div>
    </Container>
  );
}
