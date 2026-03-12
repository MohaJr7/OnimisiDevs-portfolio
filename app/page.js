import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-24 pb-16 px-6">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
            Available for New Opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Building digital products with{" "}
            <span className="text-blue-600">purpose.</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            My name is Abdulrahman Muhammad.
            I'm a Full-Stack Developer specializing in high-performance Next.js
            applications and scalable MongoDB architectures. Currently focused
            on bridging the gap between clean code and great UX.
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              href="/projects"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition shadow-lg shadow-gray-200"
            >
              View My Work
            </Link>
            <button className="border border-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack "Bento" Grid */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Next.js 15",
            "MongoDB",
            "Tailwind CSS",
            "Node.js",
            "TypeScript",
            "Git",
            "Express",
            "Mongoose",
          ].map((tech) => (
            <div
              key={tech}
              className="p-4 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-white hover:shadow-md transition cursor-default text-center font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="bg-gray-900 rounded-3xl p-12 text-white shadow-2xl shadow-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's work together
          </h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:your-email@example.com"
              className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-bold transition-all w-full md:w-auto"
            >
              Send an Email
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/mohaJr7"
                target="_blank"
                className="p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition"
              >
                <span className="sr-only">GitHub</span>
                {/* GitHub Simple Icon */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/abm-muh"
                target="_blank"
                className="p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition"
              >
                <span className="sr-only">LinkedIn</span>
                {/* LinkedIn Simple Icon */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
