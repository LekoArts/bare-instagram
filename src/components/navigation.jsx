import * as React from 'react'
import { Link } from '@reach/router'

const Navigation = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-0 left-0 right-0 flex flex-row flex-nowrap justify-around bg-white bg-opacity-80 border-gray-100 border-t dark:bg-gray-800 dark:border-gray-800"
    >
      <Link
        to="/"
        className="flex-1 text-center pt-3 pb-6 text-black dark:text-white tracking-wider border-r border-gray-300 dark:border-gray-600"
      >
        Home
      </Link>
      <Link
        to="settings"
        className="flex-1 text-center pt-3 pb-6 text-black dark:text-white tracking-wider"
      >
        Settings
      </Link>
    </nav>
  )
}

export default Navigation
