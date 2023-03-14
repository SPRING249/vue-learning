<template>
  <div class="container">
    <count-sum></count-sum>
  </div>

</template>
<script>
import CountSum from "@/components/CountSum.vue";

export default {
  name: "App",
  components: {
    CountSum
  }
}
</script>
<style>
button {
  margin-left: 5px;
}
</style>
