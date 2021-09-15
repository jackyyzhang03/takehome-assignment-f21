<template>
  <div>
    <!-- PART 1: Pass in a "complete" prop here -->
    <Instructions complete/>
    <!-- PART 4: Modify the Show component to accept all of these props -->
    <Show
      v-for="show in shows"
      :key="show.id"
      :id="show.id"
      :name="show.name"
      :episodes_seen="show.episodes_seen"
    />
    <input v-model="input"/>
    <button v-on:click="add_show()">Add</button>
  </div>
</template>

<script>
import Instructions from "./Instructions.vue";
import Show from "./Show.vue";

export default {
  components: {
    Instructions,
    Show
  },
  methods: {
    add_show() {
      this.shows.push({id: ++this.show_count, name: this.input, episodes_seen: 0});
      this.input = "";
    }
  },
  data() {
    return {
      show_count: 3,
      input: "",
      shows: [
        { id: 1, name: "Game of Thrones", episodes_seen: 0 },
        { id: 2, name: "Naruto", episodes_seen: 220 },
        { id: 3, name: "Black Mirror", episodes_seen: 3 }
      ]
    };
  }
};
</script>

<style>
</style>


