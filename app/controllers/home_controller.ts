import Post from '#models/post'
import PostTransformer from '#transformers/post_transformer'
import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async handle({ inertia }: HttpContext) {
    const posts = await Post.query().preload('author')

    return inertia.render('home', {
      posts: PostTransformer.transform(posts),
    })
  }
}
