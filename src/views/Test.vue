<template>
    <div>
        <h1>Test.vue</h1>
        <select v-model="playSpeed.value" @change="setPlaySpeed($event)">
            <option v-for="(item) in speed" :key="item.step" :value="item.value" > {{ item.step }}</option>
        </select>
        <span>{{ playSpeed }} </span>
    </div>
</template>
<script>
export default {
    name:"Test",
    data() {
        return {
            speed : [
                {step : '1단계', value:'0.5'},
                {step : '2단계', value:'0.6'},
                {step : '3단계', value:'0.7'},
                {step : '4단계', value:'0.8'},
                {step : '5단계', value:'0.9'},
                {step : '6단계', value:'1.0'},
                {step : '7단계', value:'1.1'},
                {step : '8단계', value:'1.2'},
                {step : '9단계', value:'1.3'},
                {step : '10단계', value:'1.4'},
            ],
            playSpeed: {step : '6단계', value:'1.0'},
        }
    },
    computed:{
        // speed(){
        //     let num = [];
        //     return num;
        // }
    },
    methods: {
        setPlaySpeed(e) {
            console.log('setPlaySpeed', e.target.key);
            this.playSpeed.value = e.target.value;
            if (e.target.value == this.speed.value){
                this.playSpeed.step = this.speed.step
            }
        }
    },
}
</script>