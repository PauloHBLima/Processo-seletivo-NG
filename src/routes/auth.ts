import { FastifyInstance } from "fastify";
const fastify = require('fastify')()
import { z } from "zod";
import { prisma } from '../lib/prisma'
import jwt from '@fastify/jwt';
import { authenticate } from "../../plugins/authenticate";


export async function authRoutes(fastify: FastifyInstance) {

    fastify.get('/me', {
        onRequest: [authenticate],
    },
        async (request) => {
            return { user: request.user }
        })

    fastify.post('/login', async (req, res) => {
        const bcrypt = require("bcrypt")

        const userSchema = z.object({
            username: z.string(),
            password: z.string(),
        })

        const { username, password } = userSchema.parse(req.body)

        

        let user = await prisma.users.findUnique({
            where: {
                username: username
            }
        })

        if (!user) {
            return res.status(500).send({ message: 'Usuario invalido' })
        } else {

            const hashPassword = await bcrypt.compare(password, user.password)
            if(hashPassword){
                
                const token = fastify.jwt.sign({
                    username: username,
                    password: password,
                }, {
                     expiresIn: '1 days',
                })
        
                return { token }
            } else {
                return res.status(500).send({ message: 'senha incorreta'})
            }
        }
    })
}