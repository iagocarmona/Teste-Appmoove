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

  async getAll() {
    return prisma.users.findMany()
  }

  async deleteByEmail(email) {
    return prisma.users.deleteMany({
      where: {
        email,
      },
    })
  }

  async getSearchNameAndEmail(params) {
    console.log(params)

    if (!params.email) {
      return prisma.users.findMany({
        where: {
          name: { contains: params.name },
        },
      })
    } else if (!params.name) {
      return prisma.users.findMany({
        where: {
          email: { contains: params.email },
        },
      })
    } else {
      return prisma.users.findMany({
        where: {
          OR: [
            { name: { contains: params.name } },
            { email: { contains: params.email } },
          ],
        },
      })
    }
  }

  async updateByEmail(id, name, email, phone) {
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
