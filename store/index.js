export const state = () => ({
  memoInfoList: [
    {
      posX: 50,
      posY: 20,
      text: 'fafewafa',
      background: '#f8e604'
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
        text: ''
      }
    ]
  },
  removeMemo(state, i) {
    console.log(i)
    console.log(state)
    state.memoInfoList = state.memoInfoList.filter((shikaku, index) => index !== i)
  },
  dragMemo(state, { index, deltaX, deltaY }) {
    state.memoInfoList = state.memoInfoList.map((shikaku, i) => {
      if (i === index) {
        return {
          ...shikaku,
          posX: shikaku.posX + deltaX,
          posY: shikaku.posY + deltaY
        }
      } else {
        return shikaku
      }
    })
  },
  changeToRed(state, index) {
    state.memoInfoList = state.memoInfoList.map((memoInfo, i) => {
      if (i === index) {
        return {
          ...memoInfo,
          backgroundColor: '#fffff'
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
