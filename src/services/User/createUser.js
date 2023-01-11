import * as Yup from 'yup'

import UserRepository from '../../repositories/User'

class CreateUserService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async execute(data) {
    console.log(data)
    const schema = Yup.object().shape({
      name: Yup.string()
        .typeError('Valor do atributo nome inválido!')
        .min(1, 'O atributo nome deve ter no mínimo 1 dígito!')
        .transform((_, val) => (val === String(val) ? val : null))
        .required('Por favor, informe um nome!'),
      email: Yup.string()
        .email()
        .typeError('Valor do atributo email inválido!')
        .required('Por favor, informe um email!'),
      phone: Yup.string()
        .typeError('Valor do atributo phone inválido')
        .required('Por favor, informe um número de telefone!'),
    })

    try {
      await schema.validate(data)
    } catch (error) {
      const responseError = new Error()
      responseError.status = 400
      responseError.response = error.message
      throw responseError
    }

    // const userEmail = await this.userRepository.getByEmail(data.email)
    // if (userEmail) {
    //   const responseError = new Error()
    //   responseError.status = 400
    //   responseError.response = 'Email já esta sendo utilizado!'
    //   throw responseError
    // }

    const { ...rest } = data
    console.log(rest)
    const user = await this.userRepository.create(rest)
    return user
  }
}

export default new CreateUserService()
