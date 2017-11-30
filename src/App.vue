<template>
  <div id="app">
    <h1>{{count}}</h1>
    <h1>
      {{myCount}}
    </h1>
    <p>
      <button @click="add">增加</button>
    </p>
    <p>
      <button @click="dec">减少</button>
    </p>
    <button type="button" @click="show">Notify</button>
    <aaa></aaa>
    <router-view/>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters} from 'vuex';
  import * as Types from '@/store/types';

  export default {
    name: 'app',
    computed: {
      ...mapGetters(["myCount"]),
      ...mapState(["count"])
    },
    methods: {
      ...mapActions([Types.INCREMENT, Types.DECREMENT]),
      add() {
        this[Types.INCREMENT](1);
      },
      dec() {
        this[Types.DECREMENT](1);
      },
      show() {
        this.$notify('太帅了',{delay:5000});
      }
    },
    components: {}
  }
</script>

<style>

</style>
