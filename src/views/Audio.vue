<template>
    <div>
        <h1>Audio</h1>
        <!-- <audio id="player" style="width:100%" controls="" preload="auto" ref="player" @click="play()">
            <source  id="audio_src"  type="audio/mpeg" :src="audiouSrc">
        </audio> -->
        <audio id="player" style="width:100%" controls="" preload="auto" ref="player" @click="play()">
            <source type="audio/mp3" src="../audio/test.wav"/>
        </audio>
    </div>
</template>
<script>
export default {
    created(){
        // this.getAudio();
        this.test();
    },
    methods: {
        // getAudio(){
        //     console.log('오디오 가져오기')
        //     // this.$axios.post('/test/audio/download')
        //     // this.$axios.post('http://localhost:9000/audio/download')
        //     axios.post('/api/audio/download')
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
        // },
        test(){
            console.log('test 실행')
            this.$axios.get('/api/board/list')
            // this.$axios.get('http://localhost:9000/api/board/list')
            .then(res => console.log(res))
            .catch(err => console.log('에러',err))
        },
        play(){
            console.log('오디오 플레이', this.$refs.source.src)
            // this.$refs.source.src
            let audio = new Audio('../audio/test.wav');
            audio.play();


        },
        ttsPlay(base64){
            var audio = new Audio("data:audio/wav;base64," + base64);
            audio.controls = true;
            document.body.appendChild(audio);
            audio.play();
        },
    },
}
</script>
<style>
    
</style>