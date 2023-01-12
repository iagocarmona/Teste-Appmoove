import UserRepository from '../../repositories/User'

class SearchUserByNameOrRAService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async execute(query) {
    let users
    if (!query.name && !query.email) {
      users = await this.userRepository.getAll(query)
    } else {
      users = await this.userRepository.getSearchNameAndEmail(query)
    }

    if (users.length == 0) {
      const error = new Error()
      error.status = 204
      error.response = 'Nenhum usuário com essas especificações.'
      throw error
    }

    return users
  }
}

export default new SearchUserByNameOrRAService()
