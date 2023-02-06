import classes from "./posts-grid.module.css";

import PostItem from "./post-item";
function PostGrid(props) {
  const { posts } = props;

  return (
    <ul>
      {posts.map((post, i) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
