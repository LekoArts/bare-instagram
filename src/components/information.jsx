import * as React from 'react'

const Loading = () => (
  <div className="text-center font-medium">Loading information...</div>
)

const ErrorMessage = ({ message }) => (
  <div className="text-sm px-2 py-2 mt-2 bg-red-100 rounded">{message}</div>
)

export { Loading, ErrorMessage }
