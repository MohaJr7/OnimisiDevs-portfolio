import { createProject } from "../projects/actions";
import Link from "next/link";

export default async function AdminPage({ searchParams }) {
  const params = await searchParams;
  const isAdmin = params.pass === process.env.ADMIN_SECRET;

  if (!isAdmin) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold text-red-500">
          403 - Unauthorized Access
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-10">
      <Link
        href="/projects"
        className="text-sm text-gray-500 hover:text-blue-600"
      >
        ← Back to Gallery
      </Link>
      <h1 className="text-3xl font-bold my-6">Admin Dashboard</h1>

      <div className="bg-white p-8 border rounded-2xl shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Add New Project</h2>
        <form action={createProject} className="grid gap-4">
          <input
            name="title"
            placeholder="Project Title"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            name="tech"
            placeholder="Tech Stack (comma separated)"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <textarea
            name="description"
            placeholder="Project Description"
            rows="4"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="url"
            name="link"
            placeholder="Live Demo URL (https://...)"
            className="..."
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Publish Project
          </button>
        </form>
      </div>
    </div>
  );
}
