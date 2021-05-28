import Container from "@/components/Container";
import { getFolderPaths, getPhotos } from "lib/dataFetcher";

const Shoot = ({ photos, client }) => {
  //uppercase the client's name
  const name = client.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          {name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((pic, i) => {
            return (
              <div key={i} className="">
                <img
                  src={pic.substring(6)}
                  loading="lazy"
                  className="object-fill"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  const { folderPaths } = await getFolderPaths(`public/collections/photos/`);

  return {
    paths: folderPaths.map((p) => ({
      params: { id: p[0], slug: p[1] },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const id = context.params.id;

  // console.log(context);
  const { filePaths } = await getPhotos(
    `public/collections/photos/${id}/${slug}`
  );

  // console.log(filePaths);

  return { props: { photos: filePaths, client: slug } };
}

export default Shoot;
