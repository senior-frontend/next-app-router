import { TypicodePost } from "@/model/types";
import s from "./Post.module.css";

interface PostProps extends TypicodePost {}

const Post = (props: PostProps) => {
  const { id, title, body } = props;

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.title}>{title}</div>
        <div className={s.id}>{id}</div>
      </div>
      <div className={s.body}>{body}</div>
    </div>
  );
};

export default Post;
