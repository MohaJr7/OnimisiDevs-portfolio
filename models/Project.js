import mongoose from "mongoose";

// This is the blueprint for a Project entry
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tech: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
}, { timestamps: true });

// We check if the model already exists to prevent errors during development
export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);