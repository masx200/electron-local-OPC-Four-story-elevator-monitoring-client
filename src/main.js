const {
    app,
    BrowserWindow
} = require('electron')
const electron = require('electron');


let mainWindow

function createWindow() {
    var electronScreen = electron.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({

        width: size.width,
        height: size.height,

        webPreferences: {
            nodeIntegration: true
        },
        show: false

    })
    mainWindow.maximize()

    mainWindow.show()
    mainWindow.setMenuBarVisibility(false)

    mainWindow.loadFile('index.html')

    mainWindow.setAutoHideMenuBar(true)

    mainWindow.on('closed', function () {



        mainWindow = null
    })
}




app.on('ready', createWindow)


app.on('window-all-closed', function () {


    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {


    if (mainWindow === null) createWindow()
})
