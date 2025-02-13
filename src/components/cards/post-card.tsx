import { FaExternalLinkAlt } from "react-icons/fa";

export interface Post {
  title: string;
  description: string;
  readable_publish_date: string;
  url: string;
}

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <li className="group relative rounded-xl border-4 border-secondary bg-secondary/20 p-5 hover:bg-secondary/30">
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        <p className="text-heading-3 font-medium group-hover:underline">
          {post.title}
        </p>
        <FaExternalLinkAlt className="absolute right-0 top-0 m-4 transition group-hover:scale-125" />
        <p className="text-body-1">{post.description}</p>
        <p className="text-body-2 text-accent">{post.readable_publish_date}</p>
      </a>
    </li>
  );
};
