import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

function PostItem(props) {
  const { title, excerp, image, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div>
          <h3>{title}</h3>
          <time>{date}</time>
          <p>{excerp}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
