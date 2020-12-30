import * as React from 'react'
import { onlineManager } from 'react-query'

const OfflineNotice = () => {
  const isOnline = onlineManager.isOnline()

  if (isOnline) {
    return null
  }

  return (
    <div className="fixed top-0 right-0 text-sm px-2 py-1 bg-red-600 text-white rounded-bl-lg">
      Offline
    </div>
  )
}

export default OfflineNotice
