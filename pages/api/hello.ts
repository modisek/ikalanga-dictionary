// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    switch(req.method){
        case 'GET':
            return await getStuff(req, res);
        case 'POST':
            return await setStuff(req, res);
        default:
            res.status(400).send("method not allowed");
    }
}

const getStuff = async (req: NextApiRequest, res: NextApiResponse) =>{

}

const setStuff = async (req: NextApiRequest, res: NextApiResponse) => {

}
