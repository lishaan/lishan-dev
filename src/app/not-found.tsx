export default function NotFound() {
  return (
    <main className="h-full min-h-screen">
      <section className="flex flex-col justify-center items-center h-full min-h-screen p-8 ">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-gradient mb-10 pb-2">
          Page Not Found
        </h2>
        <div className="max-w-4xl text-center text-md">
          <p className="mb-4">This page does not exist.</p>
        </div>
      </section>
    </main>
  );
}
