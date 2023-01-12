import CreateUserService from '../../services/User/createUser'
import SearchUserByNameAndEmailService from '../../services/User/searchUserByNameAndEmail'

class UserController {
  async store(req, res) {
    try {
      const user = await CreateUserService.execute(req.body)
      return res.status(200).json(user)
    } catch (error) {
      console.log(error)
      return (
        (!!error.status && res.status(error.status).json(error)) ||
        res.status(500).json(error)
      )
    }
  }

  async index(req, res) {
    try {
      const users = await SearchUserByNameAndEmailService.execute(req.query)
      return res.status(200).json(users)
    } catch (error) {
      console.log(error)
      return (
        (!!error.status && res.status(error.status).json(error)) ||
        res.status(500).json(error)
      )
    }
  }
}

export default new UserController()
