import { Hono } from "hono"
import { trpcServer } from "@hono/trpc-server" // Deno 'npm:@hono/trpc-server'
import { appRouter } from "./router"
import { showRoutes } from "hono/dev"

const app = new Hono()

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
)

showRoutes(app)

export default app

export type AppRouter = typeof appRouter
