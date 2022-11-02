import Fastify from "fastify";

async function bootstrap() {
  const fastify = Fastify({
    //O fastify vai saltando os logs durante a nossa aplicação.
    logger: true,
  })

  //A porta onde será a aplicação:
  await fastify.listen({port: 3333})
}

bootstrap();


//A entrar na aplicação usando o comando "npm run dev", antes disso temos que adicionar a biblioteca "yarn i tsx -D".
//Lembrando que temos que altera package.json nos sripts para "dev: tsx src/server.ts"