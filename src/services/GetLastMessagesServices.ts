import prismaClient from "../prisma"

class GetLastMessagesServices {
    async execute() {
        // SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATED_AT DESC
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: 'desc', 
            },
            include: {
                user: true
            }
        })
        return messages
    }
}

export { GetLastMessagesServices }