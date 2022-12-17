import { NextApiRequest, NextApiResponse } from "next";

import Talk from "@/models/talks";


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST") {
        try {
            const talk = await Talk.create(req.body);
            return res.status(201).json(talk);
        } catch (err) {
            return res.status(404).json(err);
        }
    } else {
        res.status(400).send('Invalid method for this endpoint !')
    }
};