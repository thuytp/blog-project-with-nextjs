import FeaturedPosts from "../components/homepage/featured-post";
import Hero from "../components/homepage/hero";

function HomePage() {
  const dummyPosts = [
    {
      title: "Getting Started",
      slug: "getting started",
      image: "getting-started.png",
      excerp:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      date: "04/04/1997",
    },
    {
      title: "Getting Started",
      slug: "getting started",
      image: "getting-started.png",
      excerp:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      date: "04/04/1997",
    },
    {
      title: "Getting Started",
      slug: "getting started",
      image: "getting-started.png",
      excerp:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      date: "04/04/1997",
    },
    {
      title: "Getting Started",
      slug: "getting started",
      image: "getting-started.png",
      excerp:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      date: "04/04/1997",
    },
  ];
  return (
    <>
      <Hero />
      <FeaturedPosts posts={dummyPosts} />
    </>
  );
}

export default HomePage;
