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
      <div>
        <h1>checkBox</h1>
        <table class="table" align="center">
        <thead>
          <tr>
              <th scope="col">
                  <input type="checkbox" v-model="allChecked" @click="checkedAll($event.target.checked)">
              </th>
              <th>번호</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in testList" :key="item">
              <td>
                <input type="checkbox" v-model="checkList">
              </td>
              <td>
                          <!-- :id="'check_' + item.boardId"
                          :value="item.boardId" -->
                          <!-- {{ testList }} -->
                  <!-- <input type="checkbox"
                          v-model="testList"
                          @change="selected($event)"
                  > -->
                  {{ item }}
              </td>
          </tr>
        </tbody>
    </table>
      </div>


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
      testList:['1','2','3','4'],
      allChecked:false,
      checkList:false,
    }
  },
  methods:{
    checkedAll(e){
      console.log('all ', e);
      if(e){
        this.checkList = true;
      }else {
        this.checkList = false;
      }
    },
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
