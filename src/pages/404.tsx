import Image404 from "/src/assets/images/404.png";

export default function Page404() {
  // 404 Page
  // image center of screen
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div>
        <img
          src={Image404}
          alt="404"
          className="aspect-square w-full max-w-96"
        />
        <div className="text text-center">
          <h1 className="text-2xl font-bold">404</h1>
          <p>Looks like I forgot something.</p>
          <p>Oh well, must not be important.</p>
        </div>
      </div>
    </main>
  );
}
