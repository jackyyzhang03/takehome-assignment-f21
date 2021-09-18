<template>
  <!-- PART 4: Add your code here -->
  <div class="card">
    <button class="delete" v-on:click="onDelete(id)"></button>
    <div class="card-content">
    <h5>{{name}}</h5>
    <Counter :count="episodes_seen" :onUpdate="(count) => onUpdate(this.id, count)" label="Episodes Seen"/>
    </div>
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
    },
    onDelete: {
      type: Function
    },
    onUpdate: {
      type: Function
    }
  }
};
</script>

<style>
.delete {
  border-radius: 100%;
  height: 14px;
  width: 14px;
  border-width: 0;
  background-color: #f44336;
  margin: 5px;
  margin-left: auto;
}
</style>
