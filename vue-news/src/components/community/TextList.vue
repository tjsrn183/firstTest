<template>
  <ul>
    <TransitionGroup name="list" tag="ul">
    <li v-for="(todo, index) in fetchComment" :key="index" class="item">
        <div >{{ todo }}</div>
      <button @click="removeTodoItem(index)">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </li>
    </TransitionGroup>
  </ul>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
computed:{
    ...mapGetters(["fetchComment"])
},
methods:{
   ...mapActions(["DELETE_TODO"]),
       removeTodoItem(index) {
      this.DELETE_TODO(index);
    }

}
}
</script>

<style>
.item {
    color: white;
    list-style-type: none;
    display: flex;
    font-size: 30px;
    background-color: #88cfaf;
    margin: 10px;
justify-content: space-between;
border-radius: 18px;
padding: 0 10px;
width: 500px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>