import { UserRepository } from '../../domain/repository'

export class GetAllUsers {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    return this.userRepository.getAll()
  }
}