import type { NextApiRequest, NextApiResponse } from 'next'
import sessionHandler from "../../../lib/SessionManager";
import {Session} from "../../../types/types";

type Data = Session[] | null;

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const result = sessionHandler.getSessions();
    res.status(200).json(result);
}

export default handler;
