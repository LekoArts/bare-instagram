import * as React from 'react'
import { Router } from '@reach/router'
import { Helmet } from 'react-helmet'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental'
import { ReactQueryDevtools } from "react-query/devtools";
import Home from '../views/home'
import Settings from '../views/settings'
import Navigation from '../components/navigation'
import OfflineNotice from '../components/offline-notice'

const queryClient = new QueryClient()
persistWithLocalStorage(queryClient)

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <body className="bg-white dark:bg-gray-900 min-h-screen text-gray-700 dark:text-gray-300" />
        <html lang="en-US" />
        <title>Bare Instagram</title>
      </Helmet>
      <OfflineNotice />
      <Router>
        <Home path="/" />
        <Settings path="/settings" />
      </Router>
      <Navigation />
      <ReactQueryDevtools position="top-left" panelProps={{ style: { bottom: '50px' } }} />
    </QueryClientProvider>
  )
}

export default App
