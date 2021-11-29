import React from 'react'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from 'libs/chakra'
import 'assets/styles/routerProgressBar.css'
import { useRouterProgressBar } from 'libs/routerProgressBar'

const App = ({ Component, pageProps }: AppProps) => {
  useRouterProgressBar()

  return (
    <ChakraProvider theme={customTheme}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default App