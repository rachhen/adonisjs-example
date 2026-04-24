import User from '#models/user'
import factory from '@adonisjs/lucid/factories'
import { PostFactory } from './post_factory.js'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      password: 'password',
    }
  })
  .relation('posts', () => PostFactory)
  .build()
