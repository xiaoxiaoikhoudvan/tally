<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    line-height: 1.5;
    font-family: $font-hei;
    font-size: 16px;
    background: #f5f5f5;
  }
  
  // .clearfix::after{
  //   content:'';
  //   display:block;
  //   clear:both;
  // }

</style>
