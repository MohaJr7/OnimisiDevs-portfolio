import { deleteProject } from "./actions";
import connectDB from "@/lib/db";
import Project from "@/models/Project";

export default async function ProjectsPage({ searchParams }) {
  // 1. Properly await the searchParams (Required in Next.js 15)
  const params = await searchParams;
  const isAdmin = params.pass === process.env.ADMIN_SECRET;

  // 2. Connect to DB and fetch projects
  await connectDB();
  const projects = await Project.find({}).sort({ createdAt: -1 });

  return (
    <main className="max-w-6xl mx-auto p-10 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">Project Gallery</h1>
        <p className="text-gray-500">A collection of things I've built with code.</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project._id.toString()} className="group border rounded-2xl p-6 hover:shadow-xl transition-all bg-white flex flex-col h-full">
            <div className="flex-grow">
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition tracking-tight">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.split(',').map(t => (
                  <span key={t} className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded-md uppercase">
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* --- THE LINK BUTTON --- */}
            {project.link && (
              <a 
                href={project.link.startsWith('http') ? project.link : `https://${project.link}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-gray-900 text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-blue-600 transition-colors mb-4"
              >
                Visit Project 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {/* Admin Delete Action */}
            {isAdmin && (
               <form action={deleteProject} className="pt-4 border-t mt-auto">
                 <input type="hidden" name="projectId" value={project._id.toString()} />
                 <button className="text-red-400 hover:text-red-600 text-xs font-semibold uppercase tracking-wider">
                   Remove Project
                 </button>
               </form>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed rounded-3xl">
          <p className="text-gray-400 text-lg">No projects added yet.</p>
        </div>
      )}
    </main>
  );
}