<template>
  <div>
    <div class="notify">{{value}}</div>
  </div>
</template>
<style scoped>
  .notify {
    width: 100px;
    height: 40px;
    background: rgba(0, 0, 0, .45);
    border-radius: 15px;
    line-height: 40px;
    text-align: center;
    corler: #fff;
  }
</style>

<script>
  export default {
    data() {
      return {
        value:'hello,world!'
      }
    },
    components: {},
    methods: {}
  }
</script>
