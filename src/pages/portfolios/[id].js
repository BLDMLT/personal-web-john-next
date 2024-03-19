import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
// import { useRouter } from "next/router";
import axios from 'axios'

const PortfolioDetail = ({ portfolio }) => {
  // const router = useRouter()
  // console.log('router',router)\
  // debugger
  return (
    <BaseLayout>
      <BasePage>
        <h1>PortfolioDetail</h1>
        <h1>{portfolio.title}</h1>
        <p>BODY: {portfolio.body}</p>
        <p>ID: {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  )
}

export const getServerSideProps = async ({ query }) => {
  let portfolio = []
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    portfolio = res.data
  } catch (e) {
    console.error(e)
  }

  return { props: { portfolio } }
}

export default PortfolioDetail