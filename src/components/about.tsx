export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center space-y-8"
    >
      {/* Profile Image */}
      <img
        src="/pfp.jpg"
        alt="Yahya Elmansy"
        className="w-36 h-36 rounded-full object-cover"
      />

      {/* Text Content */}
      <div className="w-full max-w-xl">
        <h2 className="text-5xl font-extrabold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700 text-left">
          I’m Yahya El Mansy, a third-year Computer Science and Analytics student at UTM. 
          Passionate about building software that solves problems and creates great experiences. 
          I love diving into finance, crypto, AI, and specialize in backend development, 
          building scalable systems and APIs. Always curious and eager to learn new tech, 
          I aim to create impactful software that matters.
        </p>
      </div>
    </section>
  );
}
