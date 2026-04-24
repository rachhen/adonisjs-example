import Post from '#models/post'
// import db from '@adonisjs/lucid/services/db'
import { Job } from '@adonisjs/queue'
import type { JobOptions } from '@adonisjs/queue/types'

interface ProcessPaymentPayload {
  // Define your payload type here
}

export default class ProcessPayment extends Job<ProcessPaymentPayload> {
  static options: JobOptions = {
    queue: 'default',
    maxRetries: 3,
  }

  async execute() {
    // Your job logic here
    console.log('Processing ProcessPayment', this.payload)

    const post = await Post.first() // ❌ Using this will running seeder fail
    console.log(post)

    // const post = db.from('posts').first() // ✅ Using this will running seeder success
    // console.log(post)
  }

  async failed(error: Error) {
    console.error('ProcessPayment failed:', error.message)
  }
}
