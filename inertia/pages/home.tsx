import { Data } from '@generated/data'
import { InertiaProps } from '~/types'

type Props = InertiaProps & {
  posts: Data.Post[]
}
export default function Home({ posts }: Props) {
  return (
    <>
      <div className="hero">
        <h1>It works — welcome to the power of a full-stack React app</h1>
        <p>
          Powered by Inertia and React, this setup blends server-driven routing with rich
          client-side interactivity — seamless, fast, and cohesive.
        </p>
      </div>

      <div className="posts">
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
            </li>
          ))}
        </ul>
      </div>

      <div className="cards">
        <a href="https://docs.adonisjs.com/introduction" target="_blank">
          <h3>Official Docs &nbsp;›</h3>
          <p>Comprehensive reference for building with AdonisJS</p>
        </a>

        <a href="https://adocasts.com/" target="_blank">
          <h3>Adocasts &nbsp;›</h3>
          <p>Guided video tutorials for everyday development</p>
        </a>

        <a href="https://discord.gg/vDcEjq6" target="_blank">
          <h3>Discord &nbsp;›</h3>
          <p>Connect with developers building with AdonisJS every day</p>
        </a>
      </div>
    </>
  )
}
