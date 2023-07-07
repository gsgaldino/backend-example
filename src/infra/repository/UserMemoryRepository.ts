import { User } from '../../domain/entity'
import { UserRepository } from '../../domain/repository'

export class UserMemoryRepository implements UserRepository {
  users: User[]

  constructor() {
    const user: User = {
      email: 'test@test.com',
      name: 'Gabs',
      password: '1234'
    }
    this.users = []
    this.users.push(user)
  }

  getAll(): Promise<User[]> {
    return Promise.resolve(this.users)
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
