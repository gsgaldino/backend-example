import { User } from '../entity'

export type UpdateUserParams = Partial<User>

export interface UserRepository {
  getAll(): Promise<User[]>
  get(params: Pick<User, 'email'>): Promise<User | null>
  save(user: User): Promise<void>
  delete(email: string): Promise<boolean>
  update(email: string, params: UpdateUserParams): Promise<User>
}
