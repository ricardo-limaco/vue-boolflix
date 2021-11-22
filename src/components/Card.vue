<template>
  <div class="col-4 _card-container">
    <img :src="imgPath" :alt="title" class="_poster">
    <div class="_overlay text-white">
      <h2 class="_title">{{ title }}</h2>
      <h3 class="_original-title" v-if="originalTitle">{{ originalTitle }}</h3>
      <img :src="flags" :alt="this.data.original_language" class="_lang">
      <div class="_vote" v-if="vote"> 
        <i v-for="num in 5" :key="'vote_star_' + num" class="fa aa" :class="num <= vote ? 'fa-star' : 'fa-star-o'"></i>
      </div>
      <div class="_overview" v-if="this.data.overview">
        <h3 class="_original-title text-center">Trama</h3>
        <p>{{ this.data.overview }}</p>
      </div>
    </div>
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


  methods: {}
}
</script>