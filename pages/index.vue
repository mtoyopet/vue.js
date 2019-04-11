<template>
  <section class="container">
    <div>
      <shikaku
        v-for="(memoInfo, i) in memoInfoList"
        :key="i"
        :posX="memoInfo.posX"
        :posY="memoInfo.posY"
        @mousedowned="moveMemo"
      />
    </div>
    <add-btn @clicked="addMemo" />
  </section>
</template>

<script>
import Shikaku from '~/components/Shikaku.vue'
import AddBtn from '~/components/AddBtn.vue'

export default {
  components: {
    Shikaku,
    AddBtn
  },
  data() {
    return {
      memoInfoList: [
        {
          posX: 20,
          posY: 20
        }
      ]
    }
  },
  methods: {
    addMemo() {
      const lastMemo = this.memoInfoList[this.memoInfoList.length - 1]

      this.memoInfoList = [
        ...this.memoInfoList,
        {
          posX: lastMemo.posX + 120,
          posY: lastMemo.posY + 40
        }
      ]
    },
    moveMemo() {
      console.log('helll')
      const shikaku = document.getElementsByClassName('shikaku')[0]
      shikaku.position = 'absolute'

      let startX, startY, initialMouseX, initialMouseY

      function mousemove(e) {
        const dx = e.clientX - initialMouseX
        const dy = e.clientY - initialMouseY
        shikaku.style.top = startY + dy + 'px'
        shikaku.style.left = startX + dx + 'px'
        return false
      }

      function mouseup() {
        this.removeEventListener('mousemove', mousemove)
        this.removeEventListener('mouseup', mouseup)
      }

      shikaku.addEventListener('mousedown', function (e) {
        startX = shikaku.offsetLeft
        startY = shikaku.offsetTop
        initialMouseX = e.clientX
        initialMouseY = e.clientY

        console.log('initialMouseX: ' + initialMouseX)
        console.log('initialMouseY: ' + initialMouseY)
        // console.log('right before the mousemove event!')

        this.addEventListener('mousemove', mousemove)
        this.addEventListener('mouseup', mouseup)
        return false
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: center/cover url('~assets/background.jpg');
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
