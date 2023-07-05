import { HttpServer } from '@/infra'
import { UserRepository } from '@/domain/repository/interfaces'
import { User } from '@/domain/entity'

import { GetUser } from './application/user/GetUser'
import { CreateUser } from './application/user/CreateUser'

export class Router {
  constructor(readonly httpServer: HttpServer, readonly userRepository: UserRepository) {}

  public init() {
    this.httpServer.on('post', '/users', async (params, body: any) => {
      const getUser = new GetUser(this.userRepository)
      const user = await getUser.execute(body.email as string)
      return user
    })

    this.httpServer.on('get', '/users', async (params, body) => {
      const createUser = new CreateUser(this.userRepository)
      await createUser.execute(body as User)
    })
  }
}
