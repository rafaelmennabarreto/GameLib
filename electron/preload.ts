import { remote } from 'electron'

declare global {
  interface Window {
    electronRemote : typeof remote
  }
}

window.electronRemote = remote

export {}
