<template>
    <div>
        <h2>Spinner</h2>
        <button @click="test">spinnerTest</button> <br>
        <div class="spinner" v-if="spinner">
            <MoonLoader/>
        </div>
    </div>
</template>
<script>
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
export default {
    data() {
        return {
            spinner:false,
        }
    },
    components:{
        MoonLoader
    },
    methods: {
        test(){
            this.spinner = !this.spinner;
        }
    },
}
</script>
<style>
    .spinner {
        /* padding: 80%; */
        position:absolute;
        left: 80%;
    
    }
</style>