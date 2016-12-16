import {
  app,
  BrowserWindow,
} from 'electron';

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
  });

  const path = require('path');
  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
