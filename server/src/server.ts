import Fastify from "fastify";
import cors from "@fastify/cors"
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

  //Seguração da aplicação:
  await fastify.register(cors, {
    origin: true,
  })
  //Criação de rotas:

  //Rota para os bolões:
  fastify.get('/pools/count', async() => {
    const count = await prisma.pool.count()

    return { count }
  })

  //A porta onde será a aplicação:
  await fastify.listen({ port: 3333, /*host: '0.0.0.0'*/ })
  //Host para funcioanar em mobile.
}

bootstrap();


//A entrar na aplicação usando o comando "npm run dev", antes disso temos que adicionar a biblioteca "yarn i tsx -D".
//Lembrando que temos que altera package.json nos sripts para "dev: tsx watch src/server.ts"
//Para tarbalhar com diagrams de classes usando essas dependencias "yarn add prisma-erd-generator  @mermaid-js/mermaid-cli -D"
//Para criar o diagrama usamos o comando "npx prisma generate"
//Biblioteca "yarn add @fastify/cors' é mecanismo de segurança da nossa aplicações para gente dizer quais aplicações estão apitas a consumir nossos dados do back end.