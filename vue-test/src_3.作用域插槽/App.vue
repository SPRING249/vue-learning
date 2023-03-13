<template>
  <div class="container">
    <category title="美食">
      <!--作用域插槽一定要用template包裹-->
      <!--<template scope name="pbw">-->
      <template v-slot:default="pbw">
        <ul>
          <li v-for="(item,index) in pbw.foods" :key="index">{{ item }}</li>
        </ul>
      </template>

    </category>

    <category title="美食">
      <template v-slot:default="pbw">
        <ol>
          <li v-for="(item,index) in pbw.foods" :key="index">{{ item }}</li>
        </ol>
      </template>
    </category>

    <category title="美食">
      <template v-slot:default="pbw">
        <h4 v-for="(item,index) in pbw.foods" :key="index">{{ item }}</h4>
      </template>
    </category>


  </div>

</template>
<script>
import Category from "@/components/Category.vue";

export default {
  name: "App",
  components: {
    Category
  }

}
</script>
<style>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}

h4 {
  text-align: center;
}
</style>
