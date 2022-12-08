import mongoose, { Schema } from "mongoose";

import IProject from "@/types/project";

const ProjectSchema = new Schema<IProject>({});

const Project = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;