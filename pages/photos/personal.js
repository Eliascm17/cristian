import Container from "@/components/Container";
import { getPhotos } from "lib/dataFetcher";
import Image from "next/image";

const personal = ({ photos }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.filePaths.map((pic) => {
          return (
            <div className="aspect-h-8 aspect-w-5">
              <Image src={pic.substring(6)} layout="fill" objectFit="cover" />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const photos = await getPhotos("public/collections/photos/personal");

  return {
    props: {
      photos,
    },
  };
}

export default personal;
