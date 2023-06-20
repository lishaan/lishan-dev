export default function About() {
  return (
    <div className="flex flex-col justify-center items-center h-full min-h-screen p-8 bg-zinc-950">
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-yellow-300 via-red-300 to-yellow-300 animate-text mb-12">
        About Me
      </h2>
      <div className="max-w-4xl text-center text-md">
        <p className="mb-4">
          {
            "I am a full stack developer with a passion for crafting custom web solutions. With a degree in BSc Computer Science, I have honed my skills in both front-end and back-end development."
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
    </div>
  );
}
