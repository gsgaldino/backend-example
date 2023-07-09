import { UserRepository } from '../../domain/repository'

interface DeleteUserDTO {
  email: string;
}

export class DeleteUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(params: DeleteUserDTO) {
    return await this.userRepository.delete(params.email)
  }
}
