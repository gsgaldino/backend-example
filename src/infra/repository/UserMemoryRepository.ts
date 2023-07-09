import { User } from '../../domain/entity'
import { UserRepository, UpdateUserParams } from '../../domain/repository/UserRepository'

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

  delete(email: string): Promise<boolean> {
    const user = this.users.find((user) => user.email === email)
    console.log('USER', user, email)
    if (!user) return Promise.resolve(false)

    return new Promise((resolve) => {
      this.users = this.users.filter((user) => user.email !== email)
      resolve(true)
    })
  }

  update(email: string, params: UpdateUserParams): Promise<User> {
    let updatedUser = {} as User

    this.users = this.users.map((user) => {
      if (user.email === email) {
        const updated = {
          ...user,
          ...params
        } as User

        updatedUser = updated
      }

      return user
    })

    return Promise.resolve(updatedUser)
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
