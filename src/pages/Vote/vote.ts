import ImagePanel from '@/components/ImagePanel/image-panel.vue';

export default {
  name: 'vote',
  components: {
    ImagePanel
  },
  data () {
    return {
      result: {
        ai: 0,
        marina: 0
      }
    };
  },
  computed: {
    formattedResult () {
      return [
        `桜葉 愛: ${this.result.ai}`,
        `佐倉 まりな: ${this.result.marina}`
      ].join('<br>');
    }
  },
  methods: {
    vote (key) {
      this.result[key] += 1;
    }
  }
};
