import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    // TODO: create a lobby.
    res.status(200).json({ name: 'John Doe' })
}

export default handler;
