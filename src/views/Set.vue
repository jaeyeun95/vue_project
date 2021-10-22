<template>
    <div>
        <h1>$set test</h1>
        <h3>배열일때</h3>
        <button @click="changeData">값변경</button> 
        <br>
        <span v-for="(item, index) in arr" :key="index">{{ item }}</span>


        <h3>Object 일때</h3>
        <button @click="remove">속성제거</button>
        <span>{{ obj }}</span>

    </div>
</template>
<script>
export default {
    data() {
        return {
            obj : {a : 'a'}, 
            arr : [0, 1, 2]
        }
    },
    methods: {
        changeData(){
            // 배열 값 변경
            // this.$set(arr, index, value)
            this.$set(this.arr, 2, 3);

            // 객체 값 변경
            // this.$set(obj, key, value)
            this.$set(this.obj, 'it', 'record')
        },
        remove(){
            // 객체 속성 제거
            // this.$delete(obj.key)
            this.$delete(this.obj, 'a')
        }
    }
}
</script>
<style>
    
</style>