import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from '@/components/BasePage';
import Link from "next/link";
import { useGetPosts } from '@/actions';

const Portfolio = () => {

  const { data, error, loading } = useGetPosts();

  const renderPosts = (posts) => {
    return posts.map(post =>
      <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}>
          {post.title}
        </Link>
      </li>

    )
  }
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portfolio Page</h1>
        {loading &&
          <p>Loading data...</p>
        }
        {data &&
          <ul>
            {renderPosts(data)}
          </ul>
        }
        {error &&
          <div className="alert alert-danger">{error.message}</div>
        }
      </BasePage>
    </BaseLayout>
  );
}

// export const getServerSideProps = async () => {
//   let posts = []
//   try {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     posts = res.data
//   } catch (e) {
//     console.error(e)
//   }
//   posts = posts.slice(0, 10)
//   return { props: { posts } }
// }
export default Portfolio