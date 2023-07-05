import { UserRepository } from '../../domain/repository/interfaces'

export class GetUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string) {
    return await this.userRepository.get({ email })
  }
}
