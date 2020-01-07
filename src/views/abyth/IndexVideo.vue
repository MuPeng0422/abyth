<template>
  <div class="player-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of playerOptions" :key="index">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="item"
        ></video-player>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev">
      <v-icon name="caret-up" scale="2" />
    </div>
    <div class="swiper-button-next" slot="button-next">
      <v-icon name="caret-down" scale="2" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 30,
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
      },
      playerOptions: []
    }
  },
  created () {
    this.getVideoUrl()
  },
  methods: {
    getVideoUrl () {
      var data = [{
        src: 'http://hls01open.ys7.com/openlive/3fe8bbde842f43af8e28d0e458fb080e.hd.m3u8'
      }, {
        src: 'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8'
      }, {
        src: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8'
      }, {
        src: 'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8'
      }]
      for (var i = 0; i < data.length; i++) {
        let arrStr = {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          controls: true, //控制条
          preload: 'auto', //视频预加载
          muted: false, //默认情况下将会消除任何音频。
          loop: false, //导致视频一结束就重新开始。
          language: 'zh-CN',
          aspectRatio: '16:9',
          fluid: true,
          sources: [
            {
              type: 'application/x-mpegURL',
              src: data[i].src
            }
          ],
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试'
        }
        this.playerOptions.push(arrStr)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.player-container {
  width: 100%;
  height: 100%;
  position: relative;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .video-player {
    cursor: pointer;
  }

  .swiper-button-prev, .swiper-button-next {
    position: absolute;
    width: 20px;
    height: 32px;
    margin-top: 0;
    z-index: 999;
    left: calc(50% - 10px);
    cursor: pointer;
    color: $color;
    background-image: none;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
  }

  .swiper-button-prev {
    top: -32px;
  }

  .swiper-button-next {
    top: 100%;
  }
}

// *播放器播放按钮样式*
.video-js .vjs-big-play-button {
  height: 2em;
  width: 2em;
  line-height: 2em;
  border-radius: 1em;
  border: 0;
}

.vjs-custom-skin > .video-js .vjs-big-play-button {
  margin-left: -1em;
}

.video-js .vjs-big-play-button:hover, .vjs-custom-skin .video-js:hover .vjs-big-play-button {
  background-color: $player-color;
  transition: all 0.3s;
}

.video-js .vjs-control:focus:before, .video-js .vjs-control:hover:before, .video-js .vjs-control:focus {
  outline: none;
}

.vjs-custom-skin > .video-js .vjs-play-progress, .vjs-custom-skin > .video-js .vjs-volume-level {
  background-color: $player-color;
}
</style>