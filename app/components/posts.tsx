import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-neutral-500"
    >
      <path
        fillRule="evenodd"
        d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function PostContent({ post }) {
  return (
    <div className="w-full flex flex-col space-y-1">
      <div className="flex items-center gap-2">
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
          {post.metadata.title}
        </p>
        {post.metadata.locked && <LockIcon />}
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {post.metadata.summary}
      </p>
      <p className="text-xs text-neutral-500 dark:text-neutral-600 tabular-nums uppercase tracking-wider">
        {formatDate(post.metadata.publishedAt, false)}
      </p>
    </div>
  )
}

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => {
          if (post.metadata.locked) {
            return (
              <div
                key={post.slug}
                className="flex flex-col space-y-1 mb-4 p-2 rounded-lg -mx-2 cursor-not-allowed opacity-75"
              >
                <PostContent post={post} />
              </div>
            )
          }

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col space-y-1 mb-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900 p-2 rounded-lg -mx-2"
            >
              <PostContent post={post} />
            </Link>
          )
        })}
    </div>
  )
}
