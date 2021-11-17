<template>
  <div id="app">
    
    <div class="ps-3">
      <input type="text" placeholder="Inserisci testo..." id="search" v-model="textToSearch" @keyup.enter="searchQuery">
      <button type="button" @click="searchQuery">Cerca</button>
    </div>


    <ul v-for="(searchCategory, i) in category" :key="i">
      <ul v-for="el in searchCategory" :key="el.id">

        <li>
          <span v-if="i === 'movies'"><strong>Genere:</strong> Movie</span>
          <span v-if="i === 'series'"><strong>Genere:</strong> Serie</span>
        </li>
        <li>
          <span v-if="i === 'movies'"><strong>Titolo:</strong> {{el.title}}</span>
          <span v-if="i === 'series'"><strong>Titolo:</strong> {{el.name}}</span>
        </li>
        <li>
          <span v-if="i === 'movies'"><strong>Titolo originale:</strong> {{el.original_title}}</span>
          <span v-if="i === 'series'"><strong>Titolo originale:</strong> {{el.original_name}}</span>
        </li>
        <li><strong>Lingua:</strong><img class="_lang" alt="lang" :src="langFlags[el.original_language]"></li>
        <li><strong>Voto:</strong> {{el.vote_average}}</li>
        <hr>

      </ul>
    </ul>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  components: {},
  data() {
    return{
      apiKey: "04ca2bb9b036573f160499e80eb6b10a",
      apiUrl: "https://api.themoviedb.org/3",
      textToSearch: "",
      category: {
        movies: [],
        series: [],
      },
      langFlags: {
        en: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png",
        it: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/280px-Flag_of_Italy.svg.png",
        es: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/280px-Flag_of_Spain.svg.png",
      },
    }
  },


  methods: {
    api(categorySearch) {
      axios.get(this.apiUrl + "/search/" + categorySearch, {
      params:{
        api_key: this.apiKey,
        query: this.textToSearch,
        language: "it",
      },
    }).then((resp) =>{
      if (categorySearch === "movie"){
        this.category.movies = resp.data.results
      } else if (categorySearch === "tv") {
        this.category.series = resp.data.results
      }
    })
    },

    searchQuery() {
      this.api('movie')
      this.api('tv')
      this.keyWord = ""
    },

  },


  mounted() {
    // this.searchQuery("/search/movie", this.textToSearch, "movies")

    //Tutte le chiamate devono avere apiKey
    //Serch deve avere anche "query"

    /*
    axios.get(this.apiUrl + "/search/movie",{
      params:{
        api_key: this.apiKey,
        query: "strange",
      },
    }).then((resp) =>{
      this.movies = resp.data.results;
    })
    */
  }
}
</script>





<style lang="scss">
@import "styles/app";
</style>
