import { UserRepository, UpdateUserParams } from '../../domain/repository/UserRepository'

export class UpdateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string, params: UpdateUserParams) {
    return await this.userRepository.update(email, params)
  }
}
