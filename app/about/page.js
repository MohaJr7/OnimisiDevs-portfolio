export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Me</h1>
      <p className="text-lg text-gray-700 max-w-md text-center">
        Hi, I'm Abdulrahman. I'm transitioning from the PERN stack to 
        becoming a Next.js and MongoDB master!
      </p>
      <a href="/" className="mt-6 px-4 py-2 bg-black text-white rounded-lg">
        Go Home
      </a>
    </div>
  );
}