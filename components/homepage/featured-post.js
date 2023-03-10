import PostGrid from "../posts/post-grid";
import classes from "./featured-post.module.css";
function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Feature Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
