<template>
  <div class="container">

    <count-sum></count-sum>
    <hr>
    <person-list></person-list>

  </div>

</template>
<script>
import CountSum from "@/components/CountSum.vue";
import PersonList from "@/components/PersonList.vue";

export default {
  name: "App",
  components: {
    CountSum, PersonList
  }
}
</script>
<style>
button {
  margin-left: 5px;
}
</style>
