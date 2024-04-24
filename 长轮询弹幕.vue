<template>
  <div class="video" ref="mask">
    <video ref="video" :src="videoData.videoInfos[0].videoLink" :controls="true"></video>
    <!-- < div class="text" ></div > -->
  </div>
</template>

<script setup>
let receive = true
let reqId = 0
let seconds = 0
let paused = 0
let preSeconds = 0
onMounted(() => {
  if (video.value) {
    let timer1 = setInterval(() => {
      preSeconds = seconds
      seconds = video.value.currentTime;
      paused = video.value.paused
      // 跳进度
      if (Math.abs(preSeconds - seconds) > 1.5) {
        reqId++
        getDanmus()
      }
      if (receive == true) {
        getDanmus()
      }
    }, 1000)
  }
})
const getDanmus = () => {
  receive = false
  axios.get('/getdanmus', { seconds, paused, reqId }).then(result => {
    if (result.data.reqId == reqId) {
      if (result.code == 200) {
        receive = true
        appendDanmu(result.data)
      } else if (result.code == 204) {
        receive = true
      }
    }
  })
}
// 调倍速
watch(()=>video.value.playbackRate,(newValue,oldValue)=>{
  if(newValue==1){
    let timer=null
    switch(oldValue){
      case 1:
        timer=timer1;
        break
      case 1.5:
        timer=timer1d5;
        break
      case 2:
        timer=timer2;
        break
    }
    clearInterval(timer)
    let timer1 = setInterval(() => {
      preSeconds = seconds
      seconds = video.value.currentTime;
      paused = video.value.paused
      // 跳进度
      if (Math.abs(preSeconds - seconds) > 1.5) {
        reqId++
        getDanmus()
      }
      if (receive == true) {
        getDanmus()
      }
    }, 1000/1)
  }else if(newValue==1.5){
    let timer=null
    switch(oldValue){
      case 1:
        timer=timer1;
        break
      case 1.5:
        timer=timer1d5;
        break
      case 2:
        timer=timer2;
        break
    }
    clearInterval(timer)
    let timer1d5 = setInterval(() => {
      preSeconds = seconds
      seconds = video.value.currentTime;
      paused = video.value.paused
      // 跳进度
      if (Math.abs(preSeconds - seconds) > 1.5) {
        reqId++
        getDanmus()
      }
      if (receive == true) {
        getDanmus()
      }
    }, 1000/1.5)
  }else if(newValue==2){
    let timer=null
    switch(oldValue){
      case 1:
        timer=timer1;
        break
      case 1.5:
        timer=timer1d5;
        break
      case 2:
        timer=timer2;
        break
    }
    clearInterval(timer)
    let timer2 = setInterval(() => {
      preSeconds = seconds
      seconds = video.value.currentTime;
      paused = video.value.paused
      // 跳进度
      if (Math.abs(preSeconds - seconds) > 1.5) {
        reqId++
        getDanmus()
      }
      if (receive == true) {
        getDanmus()
      }
    }, 1000/2)
  }
})
</script>