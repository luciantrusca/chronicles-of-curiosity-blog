import { PrismaClient } from '../../../generated/prisma/client'

const prisma = new PrismaClient()

async function main(){
  const userswithposts = await prisma.user.findMany(
    {
      include: {posts:true}
  })
  console.dir(userswithposts, { depth: null })
}


async function create() {
  const user = await prisma.user.create({
    data: {
      email: "mata@gmail.com",
      posts:{
      create: [
        {
          title:"title1",
          content:"content1"
        },
        {
          title:"jlkjkl",
          content:"jlkjkl"
        }
      ]
      }
    }
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })



