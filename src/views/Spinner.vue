<template>
    <div>
        <h2>Spinner</h2>
        <button @click="test">spinnerTest</button> <br>
        <div class="spinner" v-if="spinner">
            <MoonLoader/>
        </div>
        <br><br>
        <h2>goToErrorPage</h2>
        <button @click="goToError">error 발생</button>
        <ErrorPage v-if="errYn"/>
    </div>
</template>
<script>
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import ErrorPage from "@/views/Error.vue";
export default {
    data() {
        return {
            spinner:false,
            errYn : false,
        }
    },
    components:{
        MoonLoader,
        ErrorPage,
    },
    methods: {
        test(){
            this.spinner = !this.spinner;
        },
        goToError(){
            // this.errYn = true;
            this.errYn = !this.errYn;

            this.$axios.get('/localhost8089/abc')
            .then(res => console.log(res))
            .catch(err => {
                console.log('에러 :: ', err)
                if(err.response.status === 404){
                    this.$_error(ErrorPage);
                    console.log('##### :: ', this.$_error)
                }
            })

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