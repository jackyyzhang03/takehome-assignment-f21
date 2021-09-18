<template>
  <div>
    <!-- PART 1: Pass in a "complete" prop here -->
    <Instructions complete />
    <!-- PART 4: Modify the Show component to accept all of these props -->
    <div class="flex-container">
      <Show
        v-for="show in shows"
        :key="show.id"
        :id="show.id"
        :name="show.name"
        :episodes_seen="show.episodes_seen"
        :onClick="delete_show"
      />
      <div class="card">
        <div class="card-content">
          <h5>New Show</h5>
          <input v-model="input" class="book-input"/>
          <button v-on:click="add_show()">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Instructions from "./Instructions.vue";
import Show from "./Show.vue";

export default {
  components: {
    Instructions,
    Show,
  },
  methods: {
    add_show() {
      this.shows.push({
        id: ++this.show_count,
        name: this.input,
        episodes_seen: 0,
      });
      this.input = "";
    },
    delete_show(id) {
      const i = this.shows.findIndex((show) => show.id === id);
      this.shows.splice(i, 1);
    }
  },
  data() {
    return {
      show_count: 3,
      input: "",
      shows: [
        { id: 1, name: "Game of Thrones", episodes_seen: 0 },
        { id: 2, name: "Naruto", episodes_seen: 220 },
        { id: 3, name: "Black Mirror", episodes_seen: 3 },
      ],
    };
  },
};
</script>

<style>
.flex-container {
  max-width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  width: 250px;
  height: 175px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
}

.card:hover {
  background-color: rgb(252, 252, 252);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.22);
}

.card-content {
  margin: auto;
}

.book-input {
  border-radius: 5px;
}

button {
  border-radius: 5px;
  background-color: white;
}

</style>


