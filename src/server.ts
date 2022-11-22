import Fastify from 'fastify'
import  cors  from '@fastify/cors'
import jwt from '@fastify/jwt'


import { userRoutes } from './routes/user'
import { accountIdRoutes } from './routes/account'
import { transitionsRoutes } from './routes/transitions'
import { authRoutes } from './routes/auth'


async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true,
    })

    await fastify.register(jwt,{
        secret: 'senhamuitocorreta'
    })


    await fastify.register(userRoutes)
    await fastify.register(accountIdRoutes)
    await fastify.register(transitionsRoutes)
    await fastify.register(authRoutes)


    await fastify.listen({ port: 3000 })
}

bootstrap()


