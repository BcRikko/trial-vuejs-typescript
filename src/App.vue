<template>
  <div id="app">
    <h1 class="title">キャラクター人気投票<br>@さくらの夕べ</h1>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'app'
})
</script>

<style scoped src="./app.css"></style>
