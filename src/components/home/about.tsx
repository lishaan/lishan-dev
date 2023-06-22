export default function About() {
  return (
    <section className="flex flex-col justify-center items-center h-full min-h-screen p-8 bg-zinc-950">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-gradient mt-5 mb-10">
        About
      </h2>
      <div className="max-w-4xl text-center text-md">
        <p className="mb-4">
          {
            "I am a full stack developer from the Maldives, with a passion for crafting custom web solutions. Armed with a degree in BSc Computer Science, I have honed my skills in both front-end and back-end development."
          }
        </p>
        <p className="mb-4">
          {
            "Throughout my career, I have embarked on diverse projects, initially focusing on back-end development before discovering my love for front-end development. Over the past five years, I have been freelancing, working closely with clients to deliver tailored web solutions that align with their unique requirements."
          }
        </p>
        <p className="mb-4">
          {
            "I bring a deep understanding of web technologies, coupled with a keen eye for detail and user-centric design. My goal is to create seamless and engaging digital experiences that leave a lasting impression."
          }
        </p>
      </div>
    </section>
  );
}
