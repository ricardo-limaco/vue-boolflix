<template>
  <div>
    <ul>
      <li><img :src="imgPath" alt="" class="_poster"></li>
      <li>{{ title }}</li>
      <li v-if="this.title != this.original">{{ originalTitle }}</li>
      <li>{{ flagPath }}</li>
    </ul>

  
    <!-- <img :src="flagPath" alt="" /> -->
  </div>

</template>

<script>
export default {
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
       return this.data.original_title ? this.data.original_title : this.data.original_name
     },


    flagPath(){
      return this.data.orginal_language
    },

  }
}
</script>