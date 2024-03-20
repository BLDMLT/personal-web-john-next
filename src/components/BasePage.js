import { Container } from "reactstrap";
import Head from 'next/head';

const BasePage = props => {
  const { className = "", children } = props;
  return (
    <>
     <Head>
        <title>{`John`}</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
      </Head>
    <div className={`base-page ${className}`}>
      <Container>
        {children}
      </Container>
    </div>
    </>
  )
}

export default BasePage;