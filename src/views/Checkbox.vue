<template>
  <div class="checkbox">
    <h1>checkbox</h1>
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
          <tr v-for="(item, index) in testList" :key="index">
              <td>
                <input type="checkbox" v-model="checkList[index]" @click="checked(index, $event.target.checked)">
              </td>
              <td>
                  {{ item }}
              </td>
          </tr>
        </tbody>
    </table>
    <button @click="checkNum">번호확인</button>
  </div>
</template>
<script>
export default {
  name:"checkbox",
  data() {
    return {
      allChecked:false,
      checkList:[],
      testList:['1','2','3','4'],
    }
  },
  methods: {
    checkedAll(e){
      console.log('all ', e);
      for (let i = 0; i < this.testList.length; i++) {
        if(e){
          // this.checkList[i] = true;
          this.$set(this.checkList, i, true);
        }else {
          // this.checkList[i] = false;
          this.$set(this.checkList, i, false);
        }
      }
    },
    checked(idx,e){
      console.log('checked ::', idx, e );
    },
    checkNum(){
      if(this.checkList.length == 0){
        alert('체크하신게 없습니다.')
      }else{
        for(let i =0; i < this.checkList.length ; i++){
          if(this.checkList[i]){
            // alert(this.testList[i]+'번 선택하셨습니다.');
            alert(this.testList[i]+'번 선택하셨습니다.');
          }
        }
      }

    }

  },
}
</script>
