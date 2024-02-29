const Blog = () => {
  return (
    <section id="blog" className="bg-accent px-8 text-black">
      <div className="h-[30px] w-full"></div>
      <h2 className="text-heading-3 font-medium">Blog</h2>
      <div className="h-[20px] w-full"></div>
      <div className="space-y-6">
        <a
          className="group"
          href="https://blog.slanted.dev/posts/nextjs-13-blog-starter"
          target="_blank"
        >
          <div className="rounded-2xl bg-primary p-6 text-white group-hover:bg-background">
            <p className="text-2xl underline group-hover:text-accent">
              Next.js 13 Blog Starter
            </p>
            <p className="text-accent">11-14-2022</p>
            <div className="h-[10px] w-full"></div>
            <p>
              A step-by-step walkthrough on creating a dynamic blog using
              Next.js 13 and the new features it brings to the table.
            </p>
          </div>
        </a>
        <div className="rounded-2xl bg-primary p-6 text-white group-hover:bg-background">
          <p className="text-2xl underline group-hover:text-accent">
            How I Created a Full-Stack Quizlet Clone in a Weekend
          </p>
          <div className="h-[10px] w-full"></div>
          <p>Coming soon!</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
