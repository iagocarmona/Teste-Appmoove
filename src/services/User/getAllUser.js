import UserRepository from '../../repositories/User'

class GetAllUserService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async execute() {
    const users = await this.userRepository.getAll()
    return users
  }
}

export default new GetAllUserService()
