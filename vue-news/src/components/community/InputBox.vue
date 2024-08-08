<template>
  <div class="view">
        <form @submit.prevent="submitForm" class="form">
      <input type="text" v-model="textValue" placeholder="댓글을 입력하세요" class="input"/>
      <button type="submit" class="submitButton"><span class="material-symbols-outlined">
arrow_downward
</span></button>
    </form>

  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
data() {
    return {
      textValue:"",
    }
  },
  methods:{
     ...mapActions(['ADD_TODO']),
    submitForm(){
 if (this.textValue.trim() !== '') {
        this.ADD_TODO(
         this. textValue
        );
        this.textValue = '';
      }

    },
   
  }
}
</script>

<style>
.input {
    width: 500px;
    height: 50px;
    outline: none;
}
.form{
    display: flex;
        border-radius: 15px;
padding: 0 10px;
    background: #eeebeb;
    align-items: center;
}
.submitButton{
    background-color: #bbbaba;
    border-radius: 100%;
    height: 40px;
    width: 40px;
}
</style>