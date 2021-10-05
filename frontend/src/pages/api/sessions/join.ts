import type {NextApiRequest, NextApiResponse} from 'next'
import sessionHandler from "../../../lib/sessionHandler";
import {Player} from "../../../types/types";

type Data = Player | null;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const {id} = req.query as {id: string}

    // Join a deck.
    const result = await sessionHandler.joinSession({id});
    res.status(200).json(result)
}

export default handler;
