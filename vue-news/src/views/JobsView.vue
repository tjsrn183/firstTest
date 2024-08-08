<template>
  <div>
    <jobs-list></jobs-list>
  </div>
</template>

<script>
import JobsItem from '../components/JobsItem.vue';
import JobsList from '../components/JobsList.vue';

export default {
  components: {
    JobsItem,
    JobsList,
  },
};
</script>

<style></style>
