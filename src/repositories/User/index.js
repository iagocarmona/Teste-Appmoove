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

  async deleteByEmail(email) {
    return prisma.users.deleteMany({
      where: {
        email,
      },
    })
  }

  async getSearchNameAndEmail({ name, email }) {
    const whereCondition = {}
    console.log(name, email)
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

  async updateByEmail({ id, name, email, phone }) {
    return prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        phone,
      },
    })
  }
}

export default UserRepository
