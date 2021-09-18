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
        :onDelete="deleteShowById"
        :onUpdate="updateEpisodesWatched"
      />
      <div class="card">
        <div class="card-content">
          <h5>New Show</h5>
          <input v-model="input" class="book-input" />
          <button v-on:click="addShow()">Add</button>
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
    addShow() {
      this.shows.push({
        id: ++this.idCounter,
        name: this.input,
        episodes_seen: 0,
      });
      this.input = "";
    },
    deleteShowById(id) {
      const i = this.findShowIndexById(id);
      this.shows.splice(i, 1);
    },
    updateEpisodesWatched(id, count) {
      const i = this.findShowIndexById(id);
      this.shows[i].episodes_seen = count;
    },
    findShowIndexById(id) {
      return this.shows.findIndex((show) => show.id === id);
    },
  },
  data() {
    return {
      idCounter: 3,
      input: "",
      shows: [
        { id: 1, name: "Game of Thrones", episodes_seen: 0 },
        { id: 2, name: "Naruto", episodes_seen: 220 },
        { id: 3, name: "Black Mirror", episodes_seen: 3 },
      ],
    };
  },
  watch: {
    shows: {
      handler() {
        localStorage.setItem("shows", JSON.stringify(this.shows));
      },
      deep: true,
    },
    idCounter: {
      handler() {
        localStorage.setItem("idCounter", this.idCounter);
      },
    },
  },
  mounted() {
    if (localStorage.getItem("shows")) {
      this.shows = JSON.parse(localStorage.getItem("shows"));
    }
    if (localStorage.getItem("idCounter")) {
      this.idCounter = localStorage.getItem("idCounter");
    }
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


