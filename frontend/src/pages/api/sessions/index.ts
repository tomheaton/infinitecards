import type {NextApiRequest, NextApiResponse} from 'next'
import sessionHandler from "../../../lib/sessionHandler";
import {Session} from "../../../types/types";

type Data = Session[] | null;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const result = await sessionHandler.getSessions();
    res.status(200).json(result);
}

export default handler;
