<template>
  <div class="view">
    <input-box></input-box>
    <text-list></text-list>
  </div>
</template>

<script>
import InputBox from '../components/community/InputBox.vue';
import TextList from '../components/community/TextList.vue';
export default {
  components: { InputBox, TextList },
};
</script>

<style>
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
</style>
