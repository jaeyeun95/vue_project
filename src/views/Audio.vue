<template>
    <div>
        <a href="https://kyounghwan01.github.io/blog/Vue/vue/audio/#%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%87%E1%85%A5%E1%86%B8">sss</a>
        <h1>Audio</h1>
        <audio id="player" style="width:100%" controls="" preload="auto">
            <!-- <source type="audio/mpeg" :src="audioSrc"/> -->
            <source type="audio/mp3" :src="require('../audio/test1.wav')"/>
        </audio>

        <h3>오디오 테스트</h3>

        <div @click="play()">
            1234
        </div>
        <br>
        <button @click="test()">whileTest</button>
        <h3>{{ number }}</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // audioSrc: 'C:\\train\\tts\\772bcbd5cf6874b40e7d0c6b5bc915da8a3f941478bb2c9793818e36a07c280.wav'
            number:0,
        }
    },
    created(){
        // this.getAudio();
        // this.test();
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
        // test(){
        //     console.log('test 실행')
        //     this.$axios.get('/api/board/list')
        //     // this.$axios.get('http://localhost:9000/api/board/list')
        //     .then(res => console.log(res))
        //     .catch(err => console.log('에러',err))
        // },
        play(){
            console.log('오디오 플레이' );
            
            // node require
            const audio = new Audio(require('@/audio/test1.wav'));
            audio.play();

            console.log('dfasdf', audio.ended)
            if(audio.ended == false){
                console.log('audioended', audio.ended)
                alert('재생중.')
            }

        },
        // ttsPlay(base64){
        //     var audio = new Audio("data:audio/wav;base64," + base64);
        //     audio.controls = true;
        //     document.body.appendChild(audio);
        //     audio.play();
        // },
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
}
</script>
<style>
    
</style>