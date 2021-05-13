import Container from "@/components/Container";
import { getSpecificPhotoType } from "lib/dataFetcher";

const index = ({ photos }) => {
  console.log(photos);
  return <Container>/photos/portraits/index.js</Container>;
};

export async function getStaticProps() {
  const photos = await getSpecificPhotoType("portraits");

  return {
    props: {
      photos,
    },
  };
}

export default index;
