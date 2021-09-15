<template>
<div>
    <p>I'm a Counter!</p>
    <p>Count: {{this.count}}</p>
    <button v-on:click="count--">Decrement</button>
    <button v-on:click="count++">Increment</button>
  </div>
</template>

<script>
export default {
  props: {
    initial_count: {
      type: Number
    }
  },

  data() {
    return {
      count: this.initial_count
    };
  }
};
</script>

<style>
</style>

