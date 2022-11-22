import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function accountIdRoutes(fastify: FastifyInstance) {
    fastify.get('/accounts', async () => {
        const accountUsers = await prisma.accounts.findMany({
        })
        return { accountUsers }
    })

    fastify.get('/accounts/:id', async (req) => {
        
        const getIdParams = z.object({
            id: z.any(),
         })

        const { id } = getIdParams.parse(req.params)
        
        const accountUsers = await prisma.users.findUnique({
            where: {
                id: parseInt(id),
            },
            select : {
                account: true,
            }
        })
        return accountUsers
    })
}