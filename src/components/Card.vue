<template>
  <div>
    <ul>
      <li><img :src="imgPath" alt="" class="_poster"></li>
      <li>Titolo: {{ title }}</li>
      <li v-if="originalTitle">Titolo originale: {{ originalTitle }}</li>
      <li>Bandiera: <img :src="flags" alt="" class="_lang"></li>
      <li v-if="this.data.overview"><p>Testo: {{ this.data.overview }}</p></li>


      <li>
        <strong>Voto: </strong>
        <div class="stars-container" style="display: inline-block">
          <i
            v-for="num in 5" :key="'vote_star_' + num"
            class="fa" :class="num <= vote ? 'fa-star' : 'fa-star-o'"
          ></i>
        </div>
      </li>

    </ul>

  

  </div>

</template>

<script>
export default {
  data() {
    return{
      langFlags: {
        en: require("svg-country-flags/png100px/sh.png"),
        it: require("svg-country-flags/png100px/it.png"),
        es: require("svg-country-flags/png100px/es.png"),
        de: require("svg-country-flags/png100px/de.png"),
        fr: require("svg-country-flags/png100px/fr.png"),
        ja: require("svg-country-flags/png100px/jp.png"),
      },
    }
  },
  props: {
    data: Object,
  },

  computed: {
     imgPath(){
       const pathRoot = "https://image.tmdb.org/t/p/";
       const imxSize = "w342";

       if(!this.data.poster_path){
         return require("@/assets/Movie-placeholder.png")
       }

       return pathRoot + imxSize + this.data.poster_path;
     },

     title(){
       return this.data.title ? this.data.title : this.data.name
     },

     originalTitle(){
       const orginal = this.data.original_title ? this.data.original_title : this.data.original_name;

       return this.title === orginal ? "" : orginal
     },

    flags(){
      if(!this.langFlags[this.data.original_language]){
        return require("@/assets/Flag-placeholder.png")
      }
      return this.langFlags[this.data.original_language]
    },

    vote() {
      return Math.round(this.data.vote_average / 2);
    },

  },


  methods: {
 

  }
}
</script>