import mongoose, { Schema } from "mongoose";

import IProject from "@/types/project";

const ProjectSchema = new Schema<IProject>({
  title: String,
  year: Number,
  link_title: String,
  thumbnail: String,
  category: String,
  about: String,
  images: [
    {
      source: String,
    },
  ],
  team: [
    {
      name: String,
      role: String,
      profile_picture: String,
      website: String,
      socialNetwork: [
        {
          name: String,
          logo: String,
          link: String,
        },
      ],
    },
  ],
  missions: [
    {
      name: String,
      description: String,
    },
  ],
});

const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
