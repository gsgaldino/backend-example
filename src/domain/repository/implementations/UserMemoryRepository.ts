import { User } from '../../entity'
import { UserRepository } from '../interfaces'

export class UserMemoryRepository implements UserRepository {
  users: User[]

  constructor() {
    this.users = []
  }

  get(params: Pick<User, 'email'>): Promise<User | null> {
    const user = this.users.find((user) => user.email === params.email)
    return Promise.resolve(user || null)
  }

  save(user: User): Promise<void> {
    return new Promise((resolve) => {
      this.users.push(user)
      resolve()
    })
  }
}
