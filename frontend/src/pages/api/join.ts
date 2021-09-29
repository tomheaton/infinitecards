import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    // TODO: add user to deck lobby.
    res.status(200).json({ name: 'John Doe' })
}

export default handler;
