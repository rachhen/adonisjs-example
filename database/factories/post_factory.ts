import Post from '#models/post'
import factory from '@adonisjs/lucid/factories'

export const PostFactory = factory
  .define(Post, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(3),
      published: faker.datatype.boolean(),
    }
  })
  .build()
