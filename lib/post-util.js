import fs from "fs";
import path from "path";
import matter from "gray-matter";

// construct post directory path
export const postsDirectory = path.join(process.cwd(), "posts");

// read and retrieve data from a file
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent); // return data (metadata) and actual content
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

// map through all the files in the directory to read and get data using the function above
export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  // sort the posts and put in time order
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

// filter the posts and return featured posts
export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
