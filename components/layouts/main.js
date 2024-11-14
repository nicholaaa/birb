import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Wayne's homepage" />
          <meta name="author" content="Wayne Quah" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta property="og:site_name" content="Wayne Quah" />
          <meta name="og:title" content="Wayne Quah" />
          <meta property="og:type" content="website" />
          <title>Wayne Quah - Homepage</title>
        </Head>
  
        <NavBar path={router.asPath} />
  
        <Container maxW="container.xxl" pt={14}>
          {children}
          <Footer />
        </Container>
      </Box>
    )
  }

export default Main;
