import { NextApiRequest, NextApiResponse } from "next";

import connectToDatabase from "@/utils/db";
import Talk from "@/models/talks";


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    if(req.method === "GET") {
        try {
            const talks = await Talk.find();
            return res.status(200).json(talks);
        } catch (err) {
            return res.status(400).json(err);
        }
    } else {
        res.status(400).send('Invalid method for this endpoint !')
    }
};