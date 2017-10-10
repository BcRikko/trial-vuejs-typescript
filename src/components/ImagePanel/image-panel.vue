<template>
  <div class="panel-form">
    <div class="image-panel">
      <figure :class="csshake">
        <img class="image" :src="src">
        <figcaption>
          <p class="name">{{ name }}</p>
          <a class="twitter" :href="'https://twitter.com/' + twitter">@{{twitter}}</a>
        </figcaption>
      </figure>
    </div>
    <button class="btn" type="button" @click="onClick">投票する</button>
  </div>
</template>

<style scoped src="./image-panel.css"></style>
<script lang="ts" src="./image-panel.ts"></script>
