import { Request, Response } from 'express'
import { GetLastMessagesServices } from '../services/GetLastMessagesServices'

class GetLastMessagesController {
    async handle(request: Request, response: Response) {
        const service = new GetLastMessagesServices();

        const result = await service.execute()

        return response.json(result)
    }
}

export { GetLastMessagesController }