import type {NextApiRequest, NextApiResponse} from 'next'
import sessionHandler from "../../../lib/sessionHandler";
import {Session} from "../../../types/types";

type Data = Session[] | null;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    // TODO: create a lobby.

    const result = await sessionHandler.createSession()

    res.status(200).json(result)
}

export default handler;
