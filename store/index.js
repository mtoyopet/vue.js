export const state = () => ({
  memoInfoList: [
    {
      posX: 20,
      posY: 20,
      text: 'faaaaaafewafaaaaa',
      color: '#D9EBF7'
    }
  ]
})

export const plugins = [
  (store) => {
    store.subscribe(() => {
      localStorage.memoData = JSON.stringify(store.state.memoInfoList)
    })
  },
  (store) => {
    if (localStorage.memoData) {
      store.commit('initMemo', JSON.parse(localStorage.memoData))
    }
  }
]

export const mutations = {
  initMemo(state, memoData) {
    state.memoInfoList = memoData
  },
  addMemo(state) {
    const lastMemo = state.memoInfoList[state.memoInfoList.length - 1]

    state.memoInfoList = [
      ...state.memoInfoList,
      {
        posX: lastMemo.posX + 220,
        posY: lastMemo.posY + 20,
        text: '',
        color: '#DEE2FF'
      }
    ]
  },
  removeMemo(state, i) {
    state.memoInfoList = state.memoInfoList.filter((shikaku, index) => index !== i)
  },
  dragMemo(state, { index, deltaX, deltaY }) {
    state.memoInfoList = state.memoInfoList.map((memoInfo, i) => {
      if (i === index) {
        return {
          ...memoInfo,
          posX: memoInfo.posX + deltaX,
          posY: memoInfo.posY + deltaY
        }
      } else {
        return memoInfo
      }
    })
  },
  changeColor(state, { color, index }) {
    state.memoInfoList = state.memoInfoList.map((memoInfo, i) => {
      if (i === index) {
        return {
          ...memoInfo,
          color
        }
      } else {
        return memoInfo
      }
    })
  },
  setText(state, { text, index }) {
    state.memoInfoList = state.memoInfoList.map((memoInfo, i) => {
      if (i === index) {
        return {
          ...memoInfo,
          text
        }
      } else {
        return memoInfo
      }
    })
  }
}
