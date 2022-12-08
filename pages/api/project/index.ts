import { NextApiRequest, NextApiResponse } from "next";

import connectToDatabase from "@/utils/db";
import Project from "@/models/project";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();
    if(req.method === "POST") {
        try {
            const project = await Project.create(req.body);
            res.status(200).json({success: true, data: project});
        } catch (err) {
            res.status(400).json({success: false, data: err});
        }
    } else {
        res.status(400).send('Invalid method for this endpoint !')
    }
};