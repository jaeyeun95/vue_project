<template>
    <div>
        <h1>Audio</h1>
        <!-- <audio id="player" style="width:100%" controls="" preload="auto" ref="player" @click="play()">
            <source  id="audio_src"  type="audio/mpeg" :src="audiouSrc">
        </audio> -->
        <audio id="player" style="width:100%" controls="" preload="auto" ref="player" @click="play()">
            <source type="audio/mp3"/>
        </audio>
        <!-- src="D:\\잡\\test.wav" -->
    </div>
</template>
<script>
import axios from 'axios';
export default {
    created(){
        this.getAudio();
    },
    methods: {
        getAudio(){
            console.log('오디오 가져오기')
            // this.$axios.post('/test/audio/download')
            // this.$axios.post('http://localhost:9000/audio/download')
            axios.post('/api/audio/download')
            .then(res => console.log(res))
            .catch(err => console.log(err))
        },
        play(){
            console.log('오디오 플레이', this.$refs.source.src)
            // this.$refs.source.src
            let audio = new Audio('D:\\잡\\test.wav');
            audio.play();
        }
    },
}
</script>
<style>
    
</style>