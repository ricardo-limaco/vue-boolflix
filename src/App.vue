<template>
  <div id="app">
    
    <div class="ps-3">
      <input type="text" placeholder="Inserisci testo..." id="search" v-model="textToSearch" @keyup.enter="filter">
      <button type="button" @click="filter">Cerca</button>
    </div>

    <div class="row">
      <div class="col">
        <h3>Movies</h3>
        <Card v-for="movie in movies" :key="movie.id" :data="movie"></Card>
      </div>

      <div class="col">
        <h3>Series</h3>
        <Card v-for="serie in series" :key="serie.id" :data="serie"></Card>
      </div>
    </div>


    <!-- <div class="row">
      <div class="col">
        <h3>Movie</h3>
        <ul v-for="movie in movies" :key="movie.id">
          <li><strong>Titolo:</strong> {{movie.title}}</li>
          <li><strong>Titolo originale:</strong> {{movie.original_title}}</li>
          <li><strong>Lingua:</strong><img class="_lang" alt="lang" :src="langFlags[movie.original_language]"></li>
          <li><strong>Voto:</strong> {{movie.vote_average}}</li>
          <hr>
        </ul>
      </div>

      <div class="col"> 
        <h3>Serie</h3>
        <ul v-for="serie in series" :key="serie.id">
          <li><strong>Titolo:</strong> {{serie.name}}</li>
          <li><strong>Titolo originale:</strong> {{serie.original_name}}</li>
          <li><strong>Lingua:</strong><img class="_lang" alt="lang" :src="langFlags[serie.original_language]"></li>
          <li><strong>Voto:</strong> {{serie.vote_average}}</li>
          <hr>
        </ul>
      </div>
    </div> -->

    <!-- <ul v-for="(searchCategory, i) in category" :key="i">
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
    </ul> -->

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
      langFlags: {
        en: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
        it: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/280px-Flag_of_Italy.svg.png",
        es: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/280px-Flag_of_Spain.svg.png",
        de: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/280px-Flag_of_Germany.svg.png",
        fr: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg/280px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg.png",
      },
    }
  },


  methods: {
    /*
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
    */
   
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
