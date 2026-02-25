// Add deleteProject inside the curly braces here:
import { createProject, deleteProject } from "./actions";
import connectDB from "@/lib/db";
import Project from "@/models/Project";

export default async function ProjectsPage({ searchParams }) {
  const params = await searchParams;
  const userPass = params.pass;

  const isAdmin = userPass === process.env.ADMIN;

  await connectDB();
  const projects = await Project.find({});

  return (
    <div className="container mx-auto p-10">
      {isAdmin && <div className="p-2 bg-red-100 text-red-700 text-xs text-center mb-4 rounded">Admin Access Granted</div>}
      <h1 className="text-3xl font-bold mb-8">My Portfolio</h1>

      {/* --- THE ADD FORM --- */}

      {isAdmin && (
        <div className="bg-gray-50 p-6 rounded-xl mb-12 border border-dashed border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Add a New Project</h2>
        <form action={createProject} className="grid gap-4 max-w-md">
          <input
            name="title"
            placeholder="Project Title"
            className="p-2 border rounded"
            required
          />
          <input
            name="tech"
            placeholder="Tech Stack (e.g. React, Node)"
            className="p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Short description"
            className="p-2 border rounded"
            required
          />
          <input
            name="link"
            placeholder="Project Link (Optional)"
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Save Project
          </button>
        </form>
      </div>
      )}

      {/* --- THE LIST --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="p-6 border rounded-xl shadow-sm bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-blue-600">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-gray-400 mb-2">
                {project.tech}
              </p>
              <p className="text-gray-700">{project.description}</p>
            </div>

            {/* --- DELETE FORM --- */}
            {isAdmin && (
              <form action={deleteProject} className="mt-4 border-t pt-4">
              {/* We hide the ID in this input so the action knows which one to kill */}
              <input
                type="hidden"
                name="projectId"
                value={project._id.toString()}
              />

              <button
                type="submit"
                className="text-red-500 text-sm hover:bg-red-50 px-2 py-1 rounded transition"
              >
                Delete Project
              </button>
            </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
