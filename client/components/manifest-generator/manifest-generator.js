
/* global ClipboardUtils, FileUtils */

module.exports = {
  data () {
    return {
      name: 'Test APP',
      short_name: 'APP',
      background_color: '#FFF',
      theme_color: '#E1F7F7',
      description: 'Test description',
      iconsPath: 'img/favicon/',
      copiedManifestJSON: false,
      copiedHeaderHTML: false,
    }
  },
//  async mounted () {
//    
//  },
//  watch: {
//    
//  },
  computed: {
    manifestJSON () {
      let iconsPath = this.iconsPath
      
      if (!iconsPath.endsWith('/')) {
        iconsPath = iconsPath + '/'
      }
      
      return `{
  "name": "${this.name}",
  "short_name": "${this.short_name}",
  "start_url": ".",
  "display": "standalone",
  "background_color": "${this.background_color}",
  "description": "${this.description}",
  "icons": [{
    "src": "${this.iconsPath}favicon.png",
    "sizes": "512x512",
    "type": "image/png"
  },
  {
   "src": "${this.iconsPath}android-icon-36x36.png",
   "sizes": "36x36",
   "type": "image\/png",
   "density": "0.75"
  },
  {
   "src": "${this.iconsPath}android-icon-48x48.png",
   "sizes": "48x48",
   "type": "image\/png",
   "density": "1.0"
  },
  {
   "src": "${this.iconsPath}android-icon-72x72.png",
   "sizes": "72x72",
   "type": "image\/png",
   "density": "1.5"
  },
  {
   "src": "${this.iconsPath}android-icon-96x96.png",
   "sizes": "96x96",
   "type": "image\/png",
   "density": "2.0"
  },
  {
   "src": "${this.iconsPath}android-icon-144x144.png",
   "sizes": "144x144",
   "type": "image\/png",
   "density": "3.0"
  },
  {
   "src": "${this.iconsPath}android-icon-192x192.png",
   "sizes": "192x192",
   "type": "image\/png",
   "density": "4.0"
  }
]
}`
    },
    headerHTML () {
      let iconsPath = this.iconsPath
      
      if (!iconsPath.endsWith('/')) {
        iconsPath = iconsPath + '/'
      }
      
      return `<link rel="apple-touch-icon" sizes="57x57" href="${this.iconsPath}apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="${this.iconsPath}apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="${this.iconsPath}apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="${this.iconsPath}apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="${this.iconsPath}apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="${this.iconsPath}apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="${this.iconsPath}apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="${this.iconsPath}apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="${this.iconsPath}apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="${this.iconsPath}android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${this.iconsPath}favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="${this.iconsPath}favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${this.iconsPath}favicon-16x16.png">
    <meta name="msapplication-TileColor" content="${this.theme_color}">
    <meta name="msapplication-TileImage" content="${this.iconsPath}ms-icon-144x144.png">
    <meta name="theme-color" content="${this.theme_color}">`
    }
  },
  methods: {
    copyManifestJSON () {
      ClipboardUtils.copyPlainString(this.manifestJSON)
      this.copiedManifestJSON = false
    },
    saveManifestJSON () {
      FileUtils.download('manifest.json', this.manifestJSON)
      this.copiedManifestJSON = false
    },
    copyHeaderHTML () {
      ClipboardUtils.copyPlainString(this.headerHTML)
      this.copiedHeaderHTML = false
    },
  }
}