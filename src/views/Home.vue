<template>
  <div class="home">
      <button @click="getData">프레임워크 목록 가져오기</button>
      <br>
      <button @click="clickBtn()">클릭</button>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>
<script>
// import axios from 'axios';
export default {
  name: 'Home',
  methods:{
    getData(){
      console.log("data")
      axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
      .then(function(response){
        console.log("response:: ",response);
      })
      .catch(err => console.log(err))
    },
    // getData(){
    //   console.log("data")
    //   this.$http.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
    //   .then(function(response){
    //     console.log(response);
    //     console.log(JSON.parse(response.data));
    //   })
    // },
    clickBtn(event){
      console.log(event);
    }
  }
}
</script>
