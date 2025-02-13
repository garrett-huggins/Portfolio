import { useEffect, useState } from "react";
import { Post, PostCard } from "@/components/cards/post-card";
import { FaDev } from "react-icons/fa6";

export default function Blog() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://dev.to/api/articles?username=slanted_dev",
      );
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section id="blog" className="scroll-m-48 sm:scroll-m-0">
      <div className="h-10 w-full"></div>
      <div className="container text-body-1">
        <h2 className="text-heading-2 font-medium underline decoration-secondary">
          Blog
        </h2>
        <div className="h-10 w-full"></div>
        <ul className="list-none space-y-10">
          {posts?.map((post) => <PostCard key={post.title} post={post} />)}
        </ul>
      </div>
      <div className="h-10 w-full"></div>
      <div className="container flex items-center justify-center">
        <a
          href="https://dev.to/slanted_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-accent hover:cursor-pointer hover:underline"
        >
          <FaDev className="inline" />
          <span className="ml-2">View more on Dev.to</span>
        </a>
      </div>
    </section>
  );
}
