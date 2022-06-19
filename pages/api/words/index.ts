import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../lib/mongodb"
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
    const { db } = await connectToDatabase();

    const data = await db
    .collection("words")
    .find({})
    .toArray();


    res.json(data);

    

}

const setStuff = async (req: NextApiRequest, res: NextApiResponse) => {

    const {db} = await connectToDatabase();

    const { word, description } = req.body
    console.log(word, description)
    if (!word || !description ) return

    const insertedData = await db
    .collection("words")
    .insertOne({word: word, description: description})

    res.json({"inserted":insertedData})

}
