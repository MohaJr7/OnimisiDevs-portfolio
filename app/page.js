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
            Building digital products with <span className="text-blue-600">purpose.</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            I'm a Full-Stack Developer specializing in high-performance 
            Next.js applications and scalable MongoDB architectures. 
            Currently focused on bridging the gap between clean code and great UX.
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
          {['Next.js 15', 'MongoDB', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Git', 'Express', 'Mongoose'].map((tech) => (
            <div key={tech} className="p-4 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-white hover:shadow-md transition cursor-default text-center font-medium">
              {tech}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}