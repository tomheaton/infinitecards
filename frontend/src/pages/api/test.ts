import nextConnect from "next-connect";
import middleware from "../../lib/database";
import {ObjectID} from "mongodb";
import {NextApiRequest, NextApiResponse} from "next";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
    const { date } = req.query;
});