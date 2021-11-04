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

    }
  },
}
</script>
