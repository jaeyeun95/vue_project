<template>
    <div>
        <a href="https://kyounghwan01.github.io/blog/Vue/vue/audio/#%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%87%E1%85%A5%E1%86%B8">sss</a>
        <h1>Audio</h1>
        <audio id="player" style="width:100%" controls="" preload="auto">
            <!-- <source type="audio/mpeg" :src="audioSrc"/> -->
            <source type="audio/mp3" :src="require('../audio/test1.wav')"/>
        </audio>

        <h3 @click="play()">오디오 테스트</h3>

        <br>
        <button @click="test()">whileTest</button>
        <h3>{{ number }}</h3>

        <Test1 />
    </div>
</template>
<script>
import Test1 from '@/views/Test';
export default {
    data() {
        return {
            // audioSrc: 'C:\\train\\tts\\772bcbd5cf6874b40e7d0c6b5bc915da8a3f941478bb2c9793818e36a07c280.wav'
            number:0,
        }
    },
    methods: {
        play(){
            console.log('오디오 플레이' );
            
            // node require
            const audio = new Audio(require('@/audio/test1.wav'));
            audio.play();
        },
        test(){
            let val = 0;
            let i = 0;

            while (i<=100){
                console.log('while')
                val = val + i;
                i++;
            }

            this.number = val;
        },
    },
    components:{
        Test1,
    }
}
</script>
<style>
    
</style>