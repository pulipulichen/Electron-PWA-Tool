/* global __dirname */

const {app, BrowserWindow, dialog, Menu, Tray, globalShortcut, ipcMain, session, shell} = require('electron');
let fs = require('fs');
var path = require('path');
let config = require('../config.js')
const { exec } = require("child_process");

module.exports = {
  setup: function () {

    let events = ['loadOfflineFiles']

    events.forEach(event => {
      ipcMain.on(event, this[event])
    })
    
  },
  loadOfflineFiles: function (event, projectPath, _callback_id) {
//
//    if (config.backupDictPath) {
//      fs.writeFileSync(config.backupDictPath, projectPath, 'UTF8');
//    }

    event.sender.send(_callback_id, projectPath);
  }
};