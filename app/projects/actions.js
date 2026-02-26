'use server'
import connectDB from "@/lib/db";
import Project from "@/models/Project";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(formData) {
  await connectDB();

  const projectData = {
    title: formData.get("title"),
    tech: formData.get("tech"),
    description: formData.get("description"),
    link: formData.get("link"),
  };

  await Project.create(projectData);

  // 1. Clear the cache for these pages so they show the new project
  revalidatePath("/");
  revalidatePath("/projects");

  // 2. OPTIONAL: Automatically send the admin back to the projects gallery
  redirect("/projects");
}

export async function deleteProject(formData) {
  const projectId = formData.get("projectId");
  await connectDB();
  await Project.findByIdAndDelete(projectId);
  
  revalidatePath("/");
  revalidatePath("/projects");
}