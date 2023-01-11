import UserRepository from '../../repositories/User'

class SearchUserByNameOrRAService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async execute(params) {
    console.log(params)
    let users
    if (!params.name && !params.email) {
      users = await this.userRepository.getAll()
    } else {
      users = await this.userRepository.getSearchNameAndEmail(params)
    }

    return users
  }
}

export default new SearchUserByNameOrRAService()
