<template>
<div>
    <p>{{this.label}}: {{this.count}}</p>
    <button v-on:click="() => this.onUpdate(this.count - 1)">Decrement</button>
    <button v-on:click="() => this.onUpdate(this.count + 1)">Increment</button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: "Count"
    },
    onUpdate: {
      type: Function
    }
  },
};
</script>

<style>
</style>

