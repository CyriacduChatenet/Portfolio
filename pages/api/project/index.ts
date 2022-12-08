import { NextApiRequest, NextApiResponse } from "next";

import connectToDatabase from "@/utils/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();
    if(req.method === "POST") {
        try {} catch (err) {
            res.status(400).json(err);
        }
    } else {
        res.status(400).send('Invalid method for this endpoint !')
    }
};