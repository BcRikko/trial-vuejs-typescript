export default {
  name: 'image-panel',
  props: {
    imageSrc: {
      type: String,
      isRequired: true
    },
    name: {
      type: String,
      isRequired: true
    },
    twitter: {
      type: String,
      isRequired: true
    }
  },
  data () {
    return {
      src: require(`../../assets/${this.imageSrc}`),
      csshake: ''
    }
  },
  methods: {
    onClick () {
      this.csshake = 'shake-hard shake-constant'
      setTimeout(() => { this.csshake = '' }, 700)
      this.$emit('onclick')
    }
  }
}
