'use server'
import connectDB from "@/lib/db";
import Project from "@/models/Project";
import { revalidatePath } from "next/cache";

// 1. Action to Create a Project
export async function createProject(formData) {
  await connectDB();

  const projectData = {
    title: formData.get("title"),
    tech: formData.get("tech"),
    description: formData.get("description"),
    link: formData.get("link"),
  };

  await Project.create(projectData);
  revalidatePath("/projects");
}

// 2. Action to Delete a Project (ONLY ONE VERSION)
export async function deleteProject(formData) {
  const projectId = formData.get("projectId");
  
  await connectDB();
  await Project.findByIdAndDelete(projectId);
  
  revalidatePath("/projects");
}