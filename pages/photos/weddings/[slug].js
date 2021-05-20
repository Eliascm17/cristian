import Container from "@/components/Container";
import { getFolderPaths, getPhotos } from "lib/dataFetcher";

import React from "react";

const slug = ({ photos, client }) => {
  const { filePaths } = photos;

  return (
    <Container>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8 mb-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          {client}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {filePaths.map((pic, i) => {
            return (
              <div className="" key={i}>
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
  const { folderPaths } = await getFolderPaths(
    "public/collections/photos/wedding"
  );

  return {
    paths: folderPaths.map((p) => ({
      params: {
        slug: p,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const photos = await getPhotos(`public/collections/photos/wedding/${slug}`);

  return { props: { photos, client: slug } };
}

export default slug;
