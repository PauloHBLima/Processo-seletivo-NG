import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function userRoutes(fastify: FastifyInstance) {
    const bcrypt = require("bcrypt")

    fastify.get('/users', async (req , reply) => {
        const usuarios = await prisma.users.findMany({
        
        })
        return { usuarios }
    })

    fastify.post('/users', async (req, reply) => {
        
        const userSchema = z.object({
            username: z.string(),
            password: z.string(),
        })
            const { username, password } = userSchema.parse(req.body)

            const hashPassword = await bcrypt.hash(password, 12 )

             try {
                const newUser = await prisma.users.create({
                    data: {
                        username,
                        password: hashPassword,
    
                        account: {
                            create: {
                                balance: 100,
                            }
                        }
                    },
                })
                return newUser
             } catch (error) {
                return reply.status(500).send({ message: " Usuário ja existente "})
             }
            
    })

    
}


/* const verifyUser = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
        if (username ) {

        } */
