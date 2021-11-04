<template>
  <div class="home">
      <button @click="getData">프레임워크 목록 가져오기</button>
      <br>
      <button @click="clickBtn()">클릭</button>
      <br><br>
      <span>{{ test2 }}</span>    <br><br>
      <span>{{ result }}</span>
      <br><br>
      <!-- <div v-if="this.test == true"> -->
      <div v-if=" this.result == 'Spring' ? this.test == true : !this.test" >
        <h2>test</h2>
      </div>
      <br><br>
      <button @click="change">change</button>

      <br><br>


  </div>

</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>
<script>
// import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      test:false,
      test2:'1234',
      result:'',
    }
  },
  methods:{
    change(){
      this.test = !this.test;
      // this.result = 'result입니다.'
      // console.log('###::', this.result)
    },
    getData(){
      console.log("data")
      axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
      .then(res =>
      {
        console.log('res ::',res);
        this.result = res.data.be1;
        console.log(this.result)
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
