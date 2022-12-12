import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


const getData = async (): Promise<any> => {
    const response = await axios(`${process.env.WAKATIME_URL}`);
    return response;
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const response = await getData();
    res.write(JSON.stringify(response.data));
    res.end();
}
