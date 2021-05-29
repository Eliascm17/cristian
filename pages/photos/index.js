import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { shootsCards } from "@/lib/cardData";

const index = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          Photo Shoots
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shootsCards.map((pic, i) => {
            return (
              <div key={i}>
                <h2 className="text-2xl font-extralight md:hidden">
                  {pic.name}
                </h2>
                <Link href="/photos/[id]" as={`/photos/${pic.id}`}>
                  <div className="card-zoom aspect-w-2 aspect-h-3" key={i}>
                    <Image
                      src={pic.imgPath}
                      layout="responsive"
                      width={600}
                      height={900}
                      className="card-zoom-image"
                    />
                    <h1 className="card-zoom-text">{pic.title}</h1>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default index;
