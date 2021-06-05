const fs = require('fs')
const { exec } = require('child_process');

//let filename = __dirname + "/PWA-Tool.desktop"
let filename = __dirname + "/PWA-Tool.desktop"
let content = `#!/usr/bin/env xdg-open
[Desktop Entry]
Version=1.0
Terminal=false
Type=Application
Name=PWA Tool
Exec=npm run start-electron --prefix ${__dirname}
Icon=${__dirname}/client/img/icon/favicon.svg
StartupWMClass=ElectronProjectPWATool`

fs.writeFileSync(filename, content)
//console.log(filename)
//console.log(content)

exec(`chmod +x ${filename}`, () => {
  exec(`mv ${filename} ~/.local/share/applications/`, () => {})
})