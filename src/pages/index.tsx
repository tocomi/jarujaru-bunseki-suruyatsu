import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0.5rem;
`

const Main = styled.main`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 0;
`

const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.15;
  margin: 0;
  text-align: center;
`

const Footer = styled.footer`
  align-items: center;
  border-top: 1px solid #eaeaea;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 100%;
`

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title className="title">Welcome to Next.js!</Title>
      </Main>

      <Footer>
        <span>Powered by tocomi</span>
      </Footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  )
}

export default Home
