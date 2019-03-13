export default {
    namespace: 'home',

  state: {
      nj:{},
  },

  effects: {
  },

  reducers: {
      changeState(state, { payload }) {
          return {
              ...state,
              ...payload,
          }
      },
  },
};