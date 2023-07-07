import express, { application } from 'express'
import type { Request, Response } from 'express'

import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

import { HttpServer, HttpServerMethod } from './IHttpServer'

export class ExpressHttpServerAdapter implements HttpServer {
  private app: typeof application

  constructor() {
    this.app = express()
    this.middlewares()
  }

  private middlewares() {
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(morgan('dev'))
    this.app.use(express.json())
  }

  on(method: HttpServerMethod, url: string, callback: (params: unknown, body: unknown) => Promise<any>): void {
    this.app[method](url, async (req: Request, res: Response) => {
      const output = await callback(req.params, req.body)
      res.json(output)
    })
  }

  listen(port: number): void {
    this.app.listen(port)
    console.log(`Server listening on port: ${port}`)
  }
}
