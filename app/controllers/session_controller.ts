import User from '#models/user'
import { loginValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import limiter from '@adonisjs/limiter/services/main'

export default class SessionController {
  async create({ inertia }: HttpContext) {
    return inertia.render('auth/login', {})
  }

  async store({ request, auth, response }: HttpContext) {
    const payload = await request.validateUsing(loginValidator)

    /**
     * The keys to use for rate limiting invalid attempts.
     */
    const ipKey = `login_${request.ip()}`
    const emailKey = `login_${request.ip()}_${payload.email}`

    const loginLimiter = limiter.multi([
      { duration: '1 min', requests: 10, key: ipKey },
      { duration: '1 min', requests: 5, blockDuration: '20 mins', key: emailKey },
    ])

    /**
     * Penalize the user for invalid attempts
     */
    const [error, user] = await loginLimiter.penalize(() => {
      return User.verifyCredentials(payload.email, payload.password)
    })
    if (error) {
      throw error
    }

    await auth.use('web').login(user)
    response.redirect().toRoute('home')
  }

  async destroy({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    response.redirect().toRoute('session.create')
  }
}
