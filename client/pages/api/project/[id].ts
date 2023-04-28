import { NextApiRequest, NextApiResponse } from 'next';

import Project from '@/models/project';


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET') {
        try {
            const project = await Project.findOne({link_title: req.query.id});
            res.status(200).json({success: true, data: project});
        } catch (err) {
            res.status(400).json({success: false, data: err});
        }
    } else if(req.method === 'PATCH') {
        try {
            await Project.findByIdAndUpdate({_id: req.query.id}, {$set: req.body});
            res.status(200).json({success: true});
        } catch (err) {
            res.status(400).json({success: false, data: err});
        }
    } else if(req.method === 'DELETE') {
        try {
            await Project.findByIdAndDelete({_id: req.query.id});
            res.status(200).json({success: true});
        } catch (err) {
            res.status(400).json({success: false, data: err});
        }
    } else {
        res.status(400).send('Invalid method for this endpoint !')
    }
};