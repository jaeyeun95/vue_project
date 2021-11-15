<template>
  <div>
    <h1>axios test</h1> <br>
    <a href="https://reqres.in/"><B>RestAPI site</B></a>

    <h3>
      UserList 불러오기 <br />
      <button @click="getList()">click here</button>
    </h3>
    <h4>관리자도구를 확인해 보세요.</h4>

    <h4>create</h4>
    <span>이름 : </span><input type="text" v-model="name"> <br>
    <span>직업 : </span><input type="text" v-model="job"> <br>
    <button @click="createUser">등록하기</button> <br>
    <span>결과 :: {{ result }}</span>
  </div>
</template>
<script>
import * as api from "@/apis/test.js";
export default {
  data() {
    return {
      list: [],
      name:'',
      job:'',
      result:'',
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
    createUser(){
      api.create({name :this.name, job: this.job})
      .then(res => {
        console.log(res);
        if (res.status === 201){
          this.result = "성공";
        }else {
          this.result = "실패";
        }
      })
      .catch(err => console.log(err))
    }
  },
};
</script>
<style lang=""></style>
