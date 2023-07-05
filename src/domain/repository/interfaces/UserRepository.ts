import { User } from '../../entity'

export interface UserRepository {
  get(params: Pick<User, 'email'>): Promise<User | null>
  save(user: User): Promise<void>
}
