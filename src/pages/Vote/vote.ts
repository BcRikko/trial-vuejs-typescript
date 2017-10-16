import Vue from 'vue';
import ImagePanel from '@/components/ImagePanel/image-panel.vue';

export default Vue.extend({
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
    formattedResult (): string {
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
});
