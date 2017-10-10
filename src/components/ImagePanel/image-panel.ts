import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'image-panel',
  props: {
    imageSrc: {
      type: String,
      isRequred: true
    },
    name: {
      type: String,
      isRequred: true
    },
    twitter: {
      type: String,
      isRequred: true
    }
  }
})
export default class ImagePanel extends Vue {
  // props
  private imageSrc: string;
  private name: string;
  private twitter: string;

  // data
  private src = require(`../../assets/${this.imageSrc}`);
  private csshake = '';

  // methods
  private onClick () {
    this.csshake = 'shake-hard shake-constant';
    setTimeout(() => { this.csshake = ''; }, 700);
    this.$emit('onclick');
  }
}
