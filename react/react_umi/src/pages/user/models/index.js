import { Login } from "../services"
export default {
    namespace: 'login',
  state: {
  },

  effects: {
      *login({ payload }, {call}) {
        const response = yield call(Login)
        console.log(response)
      },
      *fetch(_, { put, call }) {
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