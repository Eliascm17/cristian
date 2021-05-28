import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import { header, photoCards } from "@/lib/cardData";

const Shoots = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          {header[id]} Shoots
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photoCards[id] &&
            photoCards[id].map((pic, i) => {
              return (
                <Link
                  href={`/photos/[id]/[slug]`}
                  as={`/photos/${pic.id}/${pic.slug}`}
                  key={i}
                >
                  <div className="card-zoom aspect-w-2 aspect-h-3">
                    <img
                      src={pic.imgPath}
                      loading="lazy"
                      className="card-zoom-image"
                    />
                    <h1 className="card-zoom-text">{pic.name}</h1>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </Container>
  );
};

export default Shoots;
