import { POSTlist } from "../service"
export default {
    namespace: 'home',

  state: {
      nj:{},
  },

  effects: {
      *fetch(_, { put, call }) {
          const response = yield call(POSTlist)
      },
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