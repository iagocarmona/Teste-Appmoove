import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserRepository {
  async create(user) {
    return prisma.users.create({
      data: {
        ...user,
      },
    })
  }

  async getAll({ page }) {
    if (!page) {
      const error = new Error()
      error.status = 400
      error.response = 'Você deve especificar uma página.'
      throw error
    }

    return prisma.users.findMany({
      skip: 20 * (page - 1),
      take: 20,
    })
  }

  async getSearchNameAndEmail({ name, email }) {
    const whereCondition = {}
    if (email) {
      whereCondition.email = { contains: email }
    }

    if (name) {
      whereCondition.name = { contains: name }
    }

    return prisma.users.findMany({
      where: whereCondition,
    })
  }
}

export default UserRepository
