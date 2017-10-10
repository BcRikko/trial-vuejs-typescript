import Vue from 'vue';
import Component from 'vue-class-component';

import ImagePanel from '@/components/ImagePanel/image-panel.vue';

@Component({
  name: 'vote',
  components: {
    ImagePanel
  }
})
export default class Vote extends Vue {
  // data
  private result = {
    ai: 0,
    marina: 0
  };

  // computed
  get formattedResult () {
    return [
      `桜葉 愛: ${this.result.ai}`,
      `佐倉 まりな: ${this.result.marina}`
    ].join('<br>');
  }

  // methods
  private vote (key: string) {
    this.result[key] += 1;
  }
}
