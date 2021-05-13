import Container from "@/components/Container";
import { getSpecificPhotoType } from "lib/dataFetcher";
import React from "react";

const index = ({ photos }) => {
  console.log(photos);
  return <Container>/photos/promos/index.js</Container>;
};

export async function getStaticProps() {
  const photos = await getSpecificPhotoType("promos");

  return {
    props: {
      photos,
    },
  };
}

export default index;
