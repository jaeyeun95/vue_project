<template>
  <div>
    <h1>axios test</h1>

    <h3>UserList 불러오기 <button @click="getList()">click here</button></h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getList() {
      this.$axios
        .get("https://reqres.in/api/unknown")
        .then((res) => console.log("res ::", res))
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang=""></style>
