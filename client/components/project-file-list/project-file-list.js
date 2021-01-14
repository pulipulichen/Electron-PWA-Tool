
/* global ClipboardUtils, ipcRenderer, ElectronUtils */

module.exports = {
  data () {
    return {
      projectPath: 'D:\\xampp\\htdocs\\projects-html5\\PWA-Plain-Text-Editor',
      fileList: ''
    }
  },
//  async mounted () {
//    
//  },
//  watch: {
//    
//  },
  methods: {
    queryProjectFileList () {
      
      //console.log(this.projectPath)
      
      let callbackID = ElectronUtils.getCallbackID('queryProjectFileList')
      ipcRenderer.on(callbackID, (event, content) => {
        console.log(content.join('\n'))
      });
      ipcRenderer.send('queryProjectFileList', this.projectPath, callbackID);
      
      //return 'ok'
    },
    copyFileList () {
      ClipboardUtils.copyPlainString(this.fileList)
    }
  }
}