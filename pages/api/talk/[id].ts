import { NextApiRequest, NextApiResponse } from "next";

import Talk from "@/models/talks";


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET") {
        const talk = await Talk.findOne({_id: req.query.id});
        return res.status(200).json(talk);
    } else if(req.method === "PATCH") {
        const talk = await Talk.findOneAndUpdate({_id: req.query.id}, req.body, {new: true});
        return res.status(200).json(talk);
    } else if(req.method === "DELETE") {
        const talk = await Talk.findOneAndRemove({_id: req.query.id});
        return res.status(200).json(talk);
    } else {
        res.status(400).send('Invalid method for this endpoint !')
    }
};