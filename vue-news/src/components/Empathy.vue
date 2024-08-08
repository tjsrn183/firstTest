<template>
    <div class="chuchon">
      <button @click="increseHeart(news.id)"><span class="material-symbols-outlined">arrow_upward_alt</span> </button>
        <div class="points">
          {{ news.points || 0 }}
        </div>
<button @click="decreseHeart(news.id)"><span class="material-symbols-outlined">arrow_downward_alt</span></button>
          </div> 
</template>

<script>
export default {
props:["news"],
 methods:{
  increseHeart(id){
    return this.$store.dispatch("INCREMENT_POINTS",id)
  },
  decreseHeart(id){
    return this.$store.dispatch("DECREMENT_POINTS",id)
  }
}

}

</script>

<style>
.points {
  
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

}
.chuchon{
  display: flex;
  align-items: center;
  justify-content: space-between;
background-color:#f4f6f8  ;
width: 80px;
border-radius: 8px;
margin:5px ;

}
</style>