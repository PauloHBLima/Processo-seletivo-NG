import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from '../lib/prisma'


export async function transitionsRoutes(fastify: FastifyInstance) {
    fastify.post('/transition', async (req, res) => {

        const transitionSchema = z.object({
            debitedAccountId: z.number().int(),
            creditedAccountId: z.number().int(),
            value: z.any()
        })


        const { debitedAccountId, creditedAccountId, value } = transitionSchema.parse(req.body)
        try {
            const haveBalance = await prisma.accounts.findUniqueOrThrow({
                where: {
                    id: debitedAccountId,
                }
            })

            if (value > haveBalance.balance) {
                return res.status(500).send({ message: "Você não possui saldo" })
            }
            else {


                const newTransition = await prisma.transactions.create({
                    data: {
                        debitedAccountId,
                        creditedAccountId,
                        value,
                    }

                })
                if (newTransition) {
                    await prisma.accounts.updateMany({
                        where: {
                            id: debitedAccountId,
                        },
                        data: {
                            balance: {
                                decrement: value
                            }
                        }
                    })

                    await prisma.accounts.updateMany({
                        where: {
                            id: creditedAccountId,
                        },
                        data: {
                            balance: {
                                increment: value
                            }
                        }
                    })
                }

                return newTransition
            }

        } catch (error) {
            return res.status(500).send({ message: "Error" })
        }

    })

    fastify.get('/transation/debitedAccount/:id', async (req, res) => {
       
         const getIdParams = z.object({
            id: z.any(),
         })

        const { id } = getIdParams.parse(req.params)
        const allDebited =  await prisma.transactions.findMany({
            where: {

                debitedAccountId: parseInt(id),
            }
            
        })
        return (allDebited)
    })

    fastify.get('/transation/creditedAccount/:id', async (req, res) => {
        const getIdParams = z.object({
            id: z.any(),
         })

        const { id } = getIdParams.parse(req.params)
        const allCredited =  await prisma.transactions.findMany({
            where: {

                creditedAccountId: parseInt(id),
            }
        })
        return (allCredited)
    })
}