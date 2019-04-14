export const state = () => ({
  memoInfoList: [
    {
      posX: 20,
      posY: 20,
      text: 'fafewafa'
    }
  ]
})

// export const plugins = [
//   (store)
// ]

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
  }
}
