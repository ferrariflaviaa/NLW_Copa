import Fastify from "fastify";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  //Aqui podemos vê as querys em logs:
  log: ['query'],
})
async function bootstrap() {
  const fastify = Fastify({
    //O fastify vai saltando os logs durante a nossa aplicação.
    logger: true,
  })

  //Criação de rotas:

  //Rota para os bolões:
  fastify.get('/pools/count', async() => {
    const count = await prisma.pool.count()

    return { count }
  })

  //A porta onde será a aplicação:
  await fastify.listen({ port: 3333 })
}

bootstrap();


//A entrar na aplicação usando o comando "npm run dev", antes disso temos que adicionar a biblioteca "yarn i tsx -D".
//Lembrando que temos que altera package.json nos sripts para "dev: tsx watch src/server.ts"