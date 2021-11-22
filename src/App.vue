<template>
  <div id="app">
    
    <header>
      <nav class="d-flex justify-content-between align-items-center">
        <a href="#"><h1>BOOLFLIX</h1></a>
        <div class="input-group _input-search">
          <input
          type="text" class="form-control" placeholder="Inserisci testo..."
          aria-label="Recipient's username" aria-describedby="button-addon2" id="search"
          v-model="textToSearch" @keyup.enter="filter">
          <button class="btn btn-danger" type="button" id="button-addon2" @click="filter">Cerca</button>
        </div>
      </nav>
    </header>


    <main>
      <section class="container">
        <h3 class="title-category">Film</h3>
          <div class="row g-0">
            <Card v-for="movie in movies" :key="movie.id" :data="movie"></Card>
          </div>
        <h3 class="title-category">Serie</h3>
          <div class="row g-0">
            <Card v-for="serie in series" :key="serie.id" :data="serie"></Card>
          </div>
      </section>
    </main>




    
 
   


  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Card.vue"

export default {
  name: 'App',
  components: {Card,},
  data() {
    return{
      apiKey: "04ca2bb9b036573f160499e80eb6b10a",
      apiUrl: "https://api.themoviedb.org/3",
      textToSearch: "",
      movies: [],
      series: [],
    }
  },


  methods: {

    searchQuery(url, textToSearch, dataKey) {
      axios.get(this.apiUrl + url, {
        params: {
          api_key: this.apiKey,
          query: textToSearch,
          language: "it",
        },
      }).then((resp) => {
          this[dataKey] = resp.data.results;
      });
    },

    filter() {
      this.searchQuery("/search/movie", this.textToSearch, "movies");
      this.searchQuery("/search/tv", this.textToSearch, "series");
      
    },
  },


  mounted() {}
}
</script>





<style lang="scss">
@import "styles/app";
</style>
