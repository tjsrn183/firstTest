<template>
  <div class="body">
    <ul class="news-list">
      <li v-for="news in listItems" :key="news.id" class="post">
       
        <div>
          <div class="personNameTime">
  <img :src="`https://i.pravatar.cc/30?img=${randomNumber(news.id)}`" alt="person" class="person">
          <small v-if="news.user" class="link-text">
            <router-link :to="`/user/${news.user}`" class="writer">{{ news.user }}</router-link>
          </small>
          <small v-if="news.time_ago" class="link-text">
            {{ news.time_ago }}
          </small>
          </div>
        
          <p class="news-title">
            <template v-if="news.domain">
              <a :href="news.url">{{ news.title }}</a>
              <small class="link-text" v-if="news.domain">({{ news.domain }})</small>
            </template>
            <template v-else>
              <router-link :to="`/item/${news.id}`">{{ news.title }}</router-link><small><a class="link-text" :href="news.domain" v-if="news.domain">({{ news.domain }})</a></small>
            </template>
          </p>
          <empathy :news="news" ></empathy>
          
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Empathy from "./Empathy.vue"
export default {
  components:{
    Empathy
  },
  computed: {
    listItems() {
      return this.$store.getters.fetchedList;
    }
  
  },
  
  methods: {
    randomNumber(id) {
      return id % 70;  
    },
 
  },
 
              
  
}
</script>

<style scoped>
.body {
  padding: 50px;
  background-color: #f4f6f8 ;
}
.news-list {
  padding: 5px 15px;
  margin: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 10px 5px 5px #d6d7d8;
}
.person{
  border-radius: 100%;
  margin: 5px 10px 5px 0px;
}
.personNameTime{
  display: flex;
align-items: center;

}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.writer {
  color: black;
  font-weight:700;
  font-size: 0.75rem;
}
.link-text {
  color: #828282;
  padding: 5px;
}
.news-title {
  margin: 0;
  font-weight:900;
}
</style>