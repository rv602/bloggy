import { createClient } from "contentful"
import PostCard from "../components/PostCard";
import Link from "next/link";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_API_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'post' })

  return {
    props: {
      posts: res.items
    },
    revalidate: 1
  }

}

export default function Recipes({ posts }) {
  // console.log(posts);

  return (
    <>
      <header>
        <title>RV's blog</title>
        <Link href="/">
          <h2>RV's blog</h2>
        </Link>
        <style jsx>{`
      header {
        color: #fff;
        cursor: pointer;
      }
    `}
        </style>
      </header>
      <div className="blog-list">
        {posts.map(post => (
          <PostCard key={post.sys.id} post={post} />
        ))}

        <style jsx>{`
        .blog-list {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px 60px;
        }
        .blog-list : hover {
          transform: scale(1.5);
        }
      `}</style>
      </div>
    </>
  )
}