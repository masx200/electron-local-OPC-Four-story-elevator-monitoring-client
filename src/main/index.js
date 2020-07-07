"use strict";
import { app, BrowserWindow } from "electron";
import * as path from "path";
import { format as formatUrl } from "url";
import { screen } from "electron";
var isDevelopment = process.env.NODE_ENV !== "production";
let mainWindow;
function createMainWindow() {
  var electronScreen = screen;
  var size = electronScreen.getPrimaryDisplay().workAreaSize;
  var window = new BrowserWindow({
    width: size.width,
    height: size.height,
    webPreferences: { nodeIntegration: true },
    show: false,
  });
  var mainWindow = window;
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.setMenuBarVisibility(false);
  mainWindow.setAutoHideMenuBar(true);
  if (isDevelopment) {
    window.webContents.openDevTools();
  }
  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(
      formatUrl({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true,
      })
    );
  }
  window.on("closed", () => {
    mainWindow = null;
  });
  window.webContents.on("devtools-opened", () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });
  return window;
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});
app.on("ready", () => {
  mainWindow = createMainWindow();
});
