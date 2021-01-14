/* global __dirname */

const {app, BrowserWindow, dialog, Menu, Tray, globalShortcut, ipcMain, session, shell} = require('electron');
let fs = require('fs');
var path = require('path');
let config = require('../config.js')
const { exec } = require("child_process");
var glob = require( 'glob' );  

let events = {
  queryProjectFileList: function (event, projectPath, _callback_id) {
//
//    if (config.backupDictPath) {
//      fs.writeFileSync(config.backupDictPath, projectPath, 'UTF8');
//    }

    if (!projectPath.endsWith('/')) {
      projectPath = projectPath + '/'
    }
    
    let ignore = [
      '\[*',
      '*.md',
      '*/LICENSE',
      '*/postcss.config.js',
      '*/package.json',
      '*/package-lock.json',
      '*/node_modules'
    ]
    
    let options = {
      ignore, 
      nodir: true
    }

    glob( projectPath + '*', options, function( err, files ) {
      event.sender.send(_callback_id, files)
    })
  }
}

module.exports = {
  setup: function () {

    for (let event in events) {
      ipcMain.on(event, events[event])
    }
  },
  
};