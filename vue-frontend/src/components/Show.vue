<template>
  <!-- PART 4: Add your code here -->
  <div>
    <p>{{name}}</p>
    <Counter :initial_count="episodes_seen"/>
  </div>
</template>

<script>
// PART 4: Add your code here
import Counter from "./Counter.vue"
export default {
  components: {
    Counter
  },
  props: {
    id: {
      type: Number
    },
    name: {
      type: String
    },
    episodes_seen: {
      type: Number
    }
  }
};
</script>

<style>
</style>
