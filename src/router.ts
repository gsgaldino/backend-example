import { HttpServer } from '@/infra'
import { UserRepository } from '@/domain/repository'
import { User } from '@/domain/entity'

import { GetUser, CreateUser, GetAllUsers, DeleteUser, UpdateUser } from './application/user'

export class Router {
  constructor(readonly httpServer: HttpServer, readonly userRepository: UserRepository) {}

  public init() {
    this.httpServer.on('delete', '/users/:email', async(params: any) => {
      const deleteUser = new DeleteUser(this.userRepository)
      const result = await deleteUser.execute({ email: params.email })
      return result
    })

    this.httpServer.on('get', '/users', async () => {
      const getAllUsers = new GetAllUsers(this.userRepository)
      const users = await getAllUsers.execute()
      return users
    })

    this.httpServer.on('get', '/users/:email', async (params: any) => {
      const getUser = new GetUser(this.userRepository)
      const user = await getUser.execute(params.email as string)
      return user
    })

    this.httpServer.on('post', '/users', async (params, body) => {
      const createUser = new CreateUser(this.userRepository)
      await createUser.execute(body as User)
    })

    this.httpServer.on('patch', '/users/:email', async (params: any, body: any) => {
      const updateUser = new UpdateUser(this.userRepository)
      const updated = await updateUser.execute(params.email, body)
      return updated
    })
  }
}
