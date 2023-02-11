import Head from "next/head";
import FeaturedPosts from "../components/homepage/featured-post";
import Hero from "../components/homepage/hero";
import { getFeaturedPosts } from "../lib/post-util";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Web development blog</title>
        <meta
          name="description"
          content="Programming and web development content"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
