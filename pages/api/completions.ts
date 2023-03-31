import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
            let options: any = {
                method: 'POST',
                url: 'https://api.openai.com/v1/chat/completions',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer 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'
                },
                data: { model: 'gpt-3.5-turbo', messages: req.body.messages }
            };

            axios.request(options).then((response) => {
                res.status(200).send(response.data)
            }).catch(function (error) {
                res.status(error.response.status).send(error)
            });
            break;

        default:
            break;
    }
}