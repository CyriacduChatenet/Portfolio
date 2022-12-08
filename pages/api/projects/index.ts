import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '@/utils/db';
import Project from '@/models/project';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();
    if(req.method === 'GET') {
        try {
            const projects = await Project.find();
            res.status(200).json({ success: true, data: projects });
        } catch (err) {
            res.status(400).json({ success: false, err });
        }
    } else {
        res.status(400).send('Invalid method for this endpoint !')
    }
};