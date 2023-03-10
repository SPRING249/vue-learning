<template>
  <div>
    <test-a></test-a>
    <test-b></test-b>
    <test-c></test-c>
  </div>
</template>

<script>
import TestA from "@/components/TestA.vue";
import TestB from "@/components/TestB.vue";
import TestC from "@/components/TestC.vue";

export default {
  name: "App",
  components: {
    TestA, TestB, TestC
  }

}
</script>
<style>

</style>