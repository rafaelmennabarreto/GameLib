import { electron } from "process";

const { dialog } = require('electron');

declare global {
  interface Window {
    dialog: Electron.Dialog
  }
}

window.dialog = dialog;

export {};