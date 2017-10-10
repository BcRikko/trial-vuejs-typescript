<template>
  <div id="vote">
    <div class="panel-container">
      <image-panel
        image-src="ai.png"
        name="桜葉 愛"
        twitter="ai_sakuraha"
        @onclick="vote('ai')">
      </image-panel>
      <image-panel
        image-src="marina.png"
        name="佐倉 まりな"
        twitter="sakura_ope"
        @onclick="vote('marina')">
      </image-panel>
    </div>
    <p class="result" v-html="formattedResult"></p>
  </div>
</template>

<style scoped src="./vote.css"></style>
<script src="./vote.js"></script>
