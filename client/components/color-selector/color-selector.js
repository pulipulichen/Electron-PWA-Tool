
/* global ClipboardUtils, FileUtils */

module.exports = {
  data () {
    return {
      modal: null,
      currentColorSet: null,
      colorSets: [
        {
          name:'flat',
          label: 'flat',
          colors: [
            [
              '#1abc9c',
              '#2ecc71',
              '#3498db',
              '#9b59b6',
              '#34495e',
            ],
            [
              '#16a085',
              '#27ae60',
              '#2980b9',
              '#8e44ad',
              '#2c3e50'
            ],
            [
              '#f1c40f',
              '#e67e22',
              '#e74c3c',
              '#ecf0f1',
              '#95a5a6',
            ],
            [
              '#f39c12',
              '#d35400',
              '#c0392b',
              '#bdc3c7',
              '#7f8c8d'
            ]
          ]
        }
      ]
    }
  },
  async mounted () {
    if (!this.currentColorSet) {
      this.currentColorSet = this.colorSets[0].name
    }
    
    this.modal = $(this.$refs.Modal).modal()
  },
//  watch: {
//    
//  },
  computed: {
    colorSetList () {
      return this.colorSets.map(s => s.name)
    },
    currentColors () {
      for (let i = 0; i < this.colorSets.length; i++) {
        if (this.colorSets[i].name === this.currentColorSet) {
          return this.colorSets[i].colors.map(line => line.map(color => color.toUpperCase()))
        }
      }
      
      return this.colorSets[0].colors.map(line => line.map(color => color.toUpperCase()))
    }
  },
  methods: {
    selectColor () {
      this.modal.modal('show')
      return 'red'
    },
    select (color) {
      console.log(color)
    }
  }
}