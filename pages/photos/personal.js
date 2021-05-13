import Container from "@/components/Container";
import { getSpecificPhotoType } from "lib/dataFetcher";
import React from "react";

const personal = ({ photos }) => {
  console.log(photos);
  return <Container>/photos/weddings/index.js</Container>;
};

export async function getStaticProps() {
  const photos = await getSpecificPhotoType("personal");

  return {
    props: {
      photos,
    },
  };
}

export default personal;
