<template>
  <v-app class="container">
    <v-main>
      <v-container>
        <v-slide-group show-arrows>
          <v-slide-item
            v-for="(item, index) in listItems"
            :key="index"
            :value="item"
          >
            <v-card class="mx-2" height="300" width="150">
              <div class="content">
               <a :href="item.url" class="title">{{ splitTitle(item.title)[1] }}</a>
                <small class="company">{{ splitTitle(item.title)[0] }}</small>
                <div class="domainTime">
                  <div class="domain">{{ sliceText(item.domain )}}</div>
                  <small v-if="item.time_ago" class="time">
                    {{ item.time_ago }}
                  </small>
                </div>
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import jobsplit from "../utils/jobsplit.js";
import truncate from "../utils/truncate.js"
export default {
  computed: {
    listItems() {
      return this.$store.getters.fetchedList;
    }
  },
  methods: {
    splitTitle(text) {
      return jobsplit(text);
    },
    sliceText(text){
      return truncate(text)
    }
  }
};
</script>

<style>
.container {
  background-color: #f4f6f8;
}

.mx-2 {
  background-color: white;
  border-radius: 8px;
  border: none; 
  padding: 5px;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-size: 10px;
}

.content .title {
  color: black;

}

.content .title:hover{
 color: #42b883;

}
.company {
  font-size: 15px;
}

.domainTime {
  position: absolute;
  bottom: 5px;
  width: 100%;
  font-size: 15px;
}
</style>
