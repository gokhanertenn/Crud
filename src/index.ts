import fastify, {FastifyInstance,FastifyRequest, FastifyServerOptions} from "fastify"
import { PrismaClient,Categories } from "@prisma/client"
import routes from './modules/categories.route';



const prisma = new PrismaClient({log: ["error","info","warn","query"]})

const app = fastify({
  logger:true
})


app.register(routes);

app.listen({ port: 8080 }, (err, address) => {

 

    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })