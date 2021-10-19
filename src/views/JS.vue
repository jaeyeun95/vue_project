<template>
    <div>
        <h1>filter</h1>
        <h3>짝수</h3>
        <!-- computed 사용시 -->
        <h4>computed</h4>
        <li v-for="(n, index) in evenNumber" :key="index">{{ n }}</li>
        <!-- method 사용시 -->
        <!-- <h4>methods</h4>
        <li v-for="(item, index) in evenNumber2()" :key="index">{{ item }}</li> -->
        
    </div>
</template>
<script>
export default {
    name:'JS',
    data() {
        return {
            numbers: [1,2,3,4,5],
        }
    },
    computed:{
        evenNumber(){
            // console.log(this.numbers.filter(item => console.log(item)))
            return this.numbers.filter(item => item % 2 ===0);
        }
    },
    methods: {
        evenNumber2(){
            // console.log(this.numbers.filter(item => console.log(item)))
            return this.numbers.filter(item => item % 2 ===0);
        }
    },
    
}
</script>