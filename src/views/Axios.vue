<template>
  <div>
    <h1>axios test</h1>

    <h3>
      UserList 불러오기 <br />
      <button @click="getList()">click here</button>
    </h3>
    <h4>관리자도구를 확인해 보세요.</h4>
  </div>
</template>
<script>
import * as api from "@/apis/test.js";
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getList() {
      // axios 사용
      // this.$axios
      //   .get("https://reqres.in/api/unknown")
      //   .then((res) => console.log("res ::", res))
      //   .catch((err) => console.log(err));

      // aixos 모듈화 해서 사용
      api
        .getList()
        .then((res) => console.log("res ::", res))
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang=""></style>
