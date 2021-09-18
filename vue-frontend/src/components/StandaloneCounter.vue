<template>
<div>
    <p>Count: {{this.count}}</p>
    <button v-on:click="count--">Decrement</button>
    <button v-on:click="count++">Increment</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    }
};
</script>

<style>
</style>

