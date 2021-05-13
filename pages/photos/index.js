import Container from "@/components/Container";
import { getAllPhotos } from "lib/dataFetcher";

const photos = (props) => {
  console.log(props);
  return <Container>/photos/index.js</Container>;
};

export async function getStaticProps() {
  const photos = await getAllPhotos();

  return {
    props: {
      fashion: photos.fashion,
      personal: photos.personal,
      promos: photos.promos,
      wedding: photos.wedding,
    },
  };
}

export default photos;
