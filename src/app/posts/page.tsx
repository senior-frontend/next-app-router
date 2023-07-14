import { TypicodePost } from "@/model/types";
import { Post } from "@/components/Post";

export const revalidate = 60;

const Page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <div>
      {posts.map((post: TypicodePost) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </div>
  );
};

export default Page;
