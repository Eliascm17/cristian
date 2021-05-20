import Container from "@/components/Container";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <div className="flex flex-col justify-center items-center w-screen space-y-8">
        <div className="relative mt-4 aspect-w-16 aspect-h-9 w-screen">
          <video autoPlay loop muted>
            <source
              src="https://player.vimeo.com/external/492976744.hd.mp4?s=46a67250bc052a00a4a52ac5891f4a2303b630b1&profile_id=174"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="hidden md:flex md:flex-col w-3/4 mt-20 ml-12 lg:mt-36 lg:ml-20 xl:mt-72">
            <div className="filter drop-shadow-xl ml-2 font-semibold z-30 px-4 text-5xl lg:text-7xl text-white">
              Hey, I'm Cristian and I make your memories last forever
            </div>
            <button
              onClick={() => {
                router.push("/contact");
              }}
              className="ml-6 mt-6 w-40 bg-transparent text-2xl font-light z-30 shadow focus:shadow-outline focus:outline-none text-white border border-white py-2 px-4 hover:bg-white hover:text-black transition ease-in-out duration-300"
              type="button"
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <div className="filter drop-shadow-xl ml-2 font-semibold z-30 px-4 text-4xl sm:text-5xl md:text-7xl text-gray-900">
            Hey, I'm Cristian and I make your memories last forever
          </div>
          <button
            onClick={() => {
              router.push("/contact");
            }}
            className="ml-6 mt-6 bg-gray-900 text-md font-light z-30 shadow focus:shadow-outline focus:outline-none text-white border border-white py-2 px-4 hover:bg-white hover:text-black transition ease-in-out duration-300"
            type="button"
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-7xl mx-auto w-full space-y-8 mt-10 px-6 md:px-8">
        <h1 className="text-4xl font-extralight sm:text-5xl lg:text-5xl">
          Featured
        </h1>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-6">
          <Link
            href={{
              pathname: "/photos/promos/[slug]",
              query: { slug: "Honey & Fig" },
            }}
          >
            <div className="card-zoom aspect-w-2 aspect-h-3">
              <img
                src="/collections/photos/promos/Honey & Fig/DSC03680.jpg"
                className="card-zoom-image"
              />
              <h1 className="card-zoom-text">Honey & Fig</h1>
            </div>
          </Link>
          <Link
            href={{
              pathname: "/photos/weddings/[slug]",
              query: { slug: "Aliza & Chris" },
            }}
          >
            <div className="card-zoom aspect-w-2 aspect-h-3">
              <img
                src="/collections/photos/wedding/Aliza & Chris/wedding-12.jpg"
                className="card-zoom-image"
              />
              <h1 className="card-zoom-text">Chris & Aliza's Wedding</h1>
            </div>
          </Link>
          <Link
            href={{
              pathname: "/photos/portraits/[slug]",
              query: { slug: "Julianna & Kaitlin" },
            }}
          >
            <div className="card-zoom aspect-w-2 aspect-h-3">
              <img
                src="/collections/photos/portraits/Julianna & Kaitlin/julesAndPalPics-02.jpg"
                className="card-zoom-image"
              />
              <h1 className="card-zoom-text">Julianna & Kaitlin</h1>
            </div>
          </Link>
        </div>

        <a href="/photos/promos">
          <div className="card-zoom aspect-w-16 aspect-h-9 mb-8">
            <video autoPlay loop muted className="card-zoom-image">
              <source
                src="https://player.vimeo.com/external/502843576.hd.mp4?s=a130de06300a01e7a4522f4a3cd1501bb796a3fa&profile_id=174"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h1 className="card-zoom-text-video">Sockdolager Brewery</h1>
          </div>
        </a>
      </div>
    </Container>
  );
}
