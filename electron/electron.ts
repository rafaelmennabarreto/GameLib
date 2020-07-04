import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'development'){
    win.loadURL('http://localhost:3000');
  }else{
    win.loadFile('index.html')
  }

  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
