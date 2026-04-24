import type User from '#models/user'
import { BaseTransformer } from '@adonisjs/core/transformers'
import PostTransformer from './post_transformer.ts'

export default class UserTransformer extends BaseTransformer<User> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'fullName',
        'email',
        'createdAt',
        'updatedAt',
        'initials',
      ]),
      posts: this.resource.posts ? PostTransformer.transform(this.resource.posts) : [],
    }
  }
}
