import { createLocalStorageStateHook } from 'use-local-storage-state'

export default createLocalStorageStateHook('design-options', {
  minimal: false,
  gapless: false,
})
