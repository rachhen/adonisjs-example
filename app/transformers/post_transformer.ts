import type Post from '#models/post'
import { BaseTransformer } from '@adonisjs/core/transformers'
import UserTransformer from './user_transformer.ts'

export default class PostTransformer extends BaseTransformer<Post> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'title',
        'content',
        'published',
        'createdAt',
        'updatedAt',
      ]),
      author: this.resource.author ? UserTransformer.transform(this.resource.author) : null,
    }
  }
}
