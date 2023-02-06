import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
  content: "",
};
function PostContent() {
  imagePath = "./images/posts/getting-started.png";
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
