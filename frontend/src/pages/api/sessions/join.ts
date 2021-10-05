import type { NextApiRequest, NextApiResponse } from 'next'
import sessionHandler from "../../../lib/SessionManager";
import {Player} from "../../../types/types";

type Data = Player | null;

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const {id, name} = req.query as {id: string, name: string}

    // TODO: join a lobby.
    const result = sessionHandler.joinSession({id, name});

    res.status(200).json(result)
}

export default handler;
