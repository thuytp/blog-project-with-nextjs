import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All blog posts </title>
        <meta
          name="description"
          content="This contain all posts about programming and web developement"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
