import type { NextApiRequest, NextApiResponse } from 'next'
import sessionHandler from "../../../lib/SessionManager";

type Data = {
    name: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    // TODO: create a lobby.

    sessionHandler.createSession()

    res.status(200).json({ name: 'John Doe' })
}

export default handler;
