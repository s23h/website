import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Salman
      </h1>
      {/* <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-6">
        <span className="bg-blue-100 text-blue-600 rounded-lg px-2 py-0.5">
          {new Date().toLocaleDateString('en-US', { timeZone: 'Europe/London', dateStyle: 'medium' })}
        </span>
        <span className="bg-green-100 text-green-600 rounded-lg px-2 py-0.5">
          {new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/London', timeStyle: 'short' })}
        </span>
        <span className="bg-purple-100 text-purple-600 rounded-lg px-2 py-0.5">London</span>
      </div> */}
      <p className="mb-4">
        {`A manifestation of my thoughts, ideas, and experiences. I write about things that I find interesting, occasionally you'll find them below. `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
