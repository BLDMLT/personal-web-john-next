import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from "next/link";
import axios from 'axios'

const Portfolio = ({ posts }) => {


  const renderPosts = () => {
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
        <h1>I am portfolios page</h1>
        <ul>
          {renderPosts()}
        </ul>
      </BasePage>
    </BaseLayout>
  );
}

export const getServerSideProps = async () => {
  let posts = []
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts = res.data
  } catch (e) {
    console.error(e)
  }
  posts = posts.slice(0, 10)
  return { props: { posts } }
}
export default Portfolio