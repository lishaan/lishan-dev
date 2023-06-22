export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center h-full min-h-screen p-8 ">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-gradient mb-10 pb-2">
        Post Not Found
      </h2>
      <div className="max-w-4xl text-center text-md">
        <p className="mb-4">
          This post does not exist. It may have been deleted or moved.
        </p>
      </div>
    </section>
  );
}
