import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
        try {
            const configuration = new Configuration({
                organization: "org-5QvC2ul93pKJ993KW6cKHlnw",
                apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                // stream:true,
                messages: req.body.messages,
            });
            const completion = response.data;

            res.status(200).send({ data: completion });
        } catch (error) {
            res.status(500).send({error})
        }

        default:
            break;
    }
}

