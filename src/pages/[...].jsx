import * as React from 'react'
import { Router, useLocation } from '@reach/router'
import { Helmet } from 'react-helmet'
import { QueryClient, QueryClientProvider } from 'react-query'
import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from '../views/home'
import Settings from '../views/settings'
import Navigation from '../components/navigation'

const queryClient = new QueryClient()
persistWithLocalStorage(queryClient, { throttleTime: 60000 })

const App = () => {
  const { pathname } = useLocation()
  const isSettingsView = pathname === `/settings`
  const showDevtools = false

  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <body className="bg-white dark:bg-gray-900 min-h-screen text-gray-700 dark:text-gray-300" />
        <html lang="en-US" />
        <title>
          {isSettingsView ? `Settings - Bare Instagram` : `Bare Instagram`}
        </title>
      </Helmet>
      <Router>
        <Home path="/" />
        <Settings path="/settings" />
      </Router>
      <Navigation />
      {showDevtools && (
        <ReactQueryDevtools
          position="top-right"
          panelProps={{ style: { bottom: '50px' } }}
        />
      )}
    </QueryClientProvider>
  )
}

export default App
