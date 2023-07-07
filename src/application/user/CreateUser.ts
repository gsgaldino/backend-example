import { UserRepository } from '../../domain/repository'
import { User } from '../../domain/entity'

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: User) {
    await this.userRepository.save(user)
  }
}
