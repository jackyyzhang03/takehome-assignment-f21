<template>
<div>
    <p>{{this.label}}: {{this.count}}</p>
    <button v-on:click="count--">Decrement</button>
    <button v-on:click="count++">Increment</button>
  </div>
</template>

<script>
export default {
  props: {
    initial_count: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: "Count"
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

