import { HttpServer } from '@/infra'
import { UserRepository } from '@/domain/repository'
import { User } from '@/domain/entity'

import { GetUser } from './application/user/GetUser'
import { CreateUser } from './application/user/CreateUser'

export class Router {
  constructor(readonly httpServer: HttpServer, readonly userRepository: UserRepository) {}

  public init() {
    this.httpServer.on('get', '/users/:email', async (params: any) => {
      const getUser = new GetUser(this.userRepository)
      const user = await getUser.execute(params.email as string)
      return user
    })

    this.httpServer.on('post', '/users', async (params, body) => {
      const createUser = new CreateUser(this.userRepository)
      await createUser.execute(body as User)
    })
  }
}
