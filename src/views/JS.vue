<template>
    <div>
        <h1>filter</h1>
        <h3>짝수</h3>
        <li v-for="(n, index) in evenNumber" :key="index">{{ n }}</li>
        
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
        
    },
    
}
</script>